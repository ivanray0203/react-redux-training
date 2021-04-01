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
    async DeleteTodo(id: number): Promise<Todo[]> {
        return this.todoRepo.DeleteTodo(id)
    }
}
