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
}
