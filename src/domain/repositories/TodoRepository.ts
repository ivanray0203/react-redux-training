import { Todo } from "../entities/Todo"

export interface TodoRepository {
    GetTodos(): Promise<Todo[]>
    AddTodo(data: any): Promise<Todo[]>
}
