import { Todo } from "../entities/Todo"

export interface TodoRepository {
    GetTodos(): Promise<Todo[]>
    AddTodo(data: any): Promise<Todo[]>
    DeleteTodo(data: any): Promise<Todo[]>
    UpdateTodo(data: any): Promise<Todo[]>
    UpdateStatus(data: any): Promise<Todo[]>
}
