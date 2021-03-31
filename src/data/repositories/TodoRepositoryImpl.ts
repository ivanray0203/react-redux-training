import { Todo } from "../../domain/entities/Todo"
import { TodoRepository } from "../../domain/repositories/TodoRepository"

class todoDTO {
    id = 0
    name = ""
}

const todoList = [
    { id: 1, name: "Study React Componets" },
    { id: 2, name: "Study Redux" },
]

export class TodoRepositoryImpl implements TodoRepository {
    async GetTodos(): Promise<Todo[]> {
        return todoList.map((todo: todoDTO) => new Todo(todo.id, todo.name))
    }

    async AddTodo(data: any): Promise<Todo[]> {
        todoList.push(data)
        return todoList.map((todo: todoDTO) => new Todo(todo.id, todo.name))
    }
}
