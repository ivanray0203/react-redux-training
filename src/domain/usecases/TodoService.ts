import { Todo } from "../entities/Todo"
import { TodoRepository } from "../repositories/TodoRepository"

export class TodoServiceImpl implements TodoRepository {
    todoRepo: TodoRepository

    constructor(tr: TodoRepository) {
        this.todoRepo = tr
    }

    async GetTodos(): Promise<Todo[]> {
        const data = await this.todoRepo.GetTodos()
        const date_now = new Date()
        for (const i in data) {
            const date_created = new Date(data[i].date_created).getTime()
            const difference = date_now.getTime() - date_created
            const number_of_days = Math.floor(difference / (1000 * 3600 * 24))
            data[i].number_of_days = number_of_days
        }

        return data
    }

    async AddTodo(data: any): Promise<Todo[]> {
        return this.todoRepo.AddTodo(data)
    }
    async DeleteTodo(data: any): Promise<Todo[]> {
        if (!data.isCompleted) {
            return this.todoRepo.DeleteTodo(data)
        } else {
            alert("Competed Task Cannot be Deleted")
            return data
        }
    }
    async UpdateTodo(data: any): Promise<Todo[]> {
        return this.todoRepo.UpdateTodo(data)
    }
    async UpdateStatus(data: any): Promise<Todo[]> {
        return this.todoRepo.UpdateStatus(data)
    }
}
