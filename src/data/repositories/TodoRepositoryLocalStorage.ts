import { Todo } from "../../domain/entities/Todo"
import { TodoRepository } from "../../domain/repositories/TodoRepository"

class todoDTO {
    id = ""
    name = ""
    isCompleted = false
    date_created = ""
    number_of_days = 0
}

const todoList = [
    { id: "1", name: "React Js and Redux", isCompleted: false, date_created: "2021-04-01", number_of_days: 0 },
    { id: "2", name: "LocalStorage", isCompleted: false, date_created: "2021-03-16", number_of_days: 0 },
]

localStorage.setItem("TodoList", JSON.stringify(todoList))
const todolistData = JSON.parse(<string>localStorage.getItem("TodoList"))
export class TodoRepositoryLocalStorage implements TodoRepository {
    async GetTodos(): Promise<Todo[]> {
        return todolistData.map(
            (todo: todoDTO) => new Todo(todo.id, todo.name, todo.isCompleted, todo.date_created, todo.number_of_days),
        )
    }

    async AddTodo(data: any): Promise<Todo[]> {
        todolistData.push(data)
        console.log("TodoList", todolistData)
        localStorage.setItem("TodoList", JSON.stringify(todolistData))
        return todolistData.map(
            (todo: todoDTO) => new Todo(todo.id, todo.name, todo.isCompleted, todo.date_created, todo.number_of_days),
        )
    }

    async DeleteTodo(data: any): Promise<Todo[]> {
        const deleteTodo = todolistData
            .map((todo: any) => {
                return todo.id
            })
            .indexOf(data.id)
        todolistData.splice(deleteTodo, 1)
        localStorage.setItem("TodoList", JSON.stringify(todolistData))
        return todolistData
    }
    async UpdateTodo(data: any): Promise<Todo[]> {
        const updateTodoIndex = todolistData.findIndex((obj: any) => obj.id === data.id)
        todolistData[updateTodoIndex].name = data.name
        localStorage.setItem("TodoList", JSON.stringify(todolistData))
        return todolistData
    }
    async UpdateStatus(data: any): Promise<Todo[]> {
        const updateStatusIndex = todolistData.findIndex((obj: any) => obj.id === data.id)
        todolistData[updateStatusIndex].isCompleted = data.isCompleted
        localStorage.setItem("TodoList", JSON.stringify(todolistData))
        return todolistData
    }
}
