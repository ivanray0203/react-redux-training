import { Todo } from "../entities/Todo"
import { TodoRepository } from "../repositories/TodoRepository"

export class TodoServiceImpl implements TodoRepository {
    todoRepo: TodoRepository

    constructor(tr: TodoRepository) {
        this.todoRepo = tr
    }

    async GetTodos(): Promise<Todo[]> {
        return this.todoRepo.GetTodos()
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
