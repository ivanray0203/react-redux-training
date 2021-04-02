import { Todo } from "../../domain/entities/Todo"
import { TodoRepository } from "../../domain/repositories/TodoRepository"

class todoDTO {
    id = 0
    name = ""
    isCompleted = false
}

const todoList = [
    { id: 1, name: "Study React Componets", isCompleted: false },
    { id: 2, name: "Study Redux", isCompleted: false },
]

export class TodoRepositoryImpl implements TodoRepository {
    async GetTodos(): Promise<Todo[]> {
        return todoList.map((todo: todoDTO) => new Todo(todo.id, todo.name, todo.isCompleted))
    }

    async AddTodo(data: any): Promise<Todo[]> {
        todoList.push(data)
        return todoList.map((todo: todoDTO) => new Todo(todo.id, todo.name, todo.isCompleted))
    }

    async DeleteTodo(id: number): Promise<Todo[]> {
        const deleteTodo = todoList
            .map((todo) => {
                return todo.id
            })
            .indexOf(id)
        todoList.splice(deleteTodo, 1)
        console.log("Delete TODO", todoList)
        return todoList
    }
    async UpdateTodo(data: any): Promise<Todo[]> {
        const updateTodoIndex = todoList.findIndex((obj) => obj.id === data.id)
        todoList[updateTodoIndex].name = data.name
        console.log(todoList)
        return todoList
    }
    async UpdateStatus(data: any): Promise<Todo[]> {
        const updateStatusIndex = todoList.findIndex((obj) => obj.id === data.id)
        todoList[updateStatusIndex].isCompleted = data.isCompleted
        return todoList
    }
}
