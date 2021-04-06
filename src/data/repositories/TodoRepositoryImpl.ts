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
    { id: "1", name: "Study React Componets", isCompleted: false, date_created: "2021-04-01", number_of_days: 0 },
    { id: "2", name: "Study Redux", isCompleted: false, date_created: "2021-03-16", number_of_days: 0 },
]
export class TodoRepositoryImpl implements TodoRepository {
    async GetTodos(): Promise<Todo[]> {
        return todoList.map(
            (todo: todoDTO) => new Todo(todo.id, todo.name, todo.isCompleted, todo.date_created, todo.number_of_days),
        )
    }

    async AddTodo(data: any): Promise<Todo[]> {
        todoList.push(data)
        return todoList.map(
            (todo: todoDTO) => new Todo(todo.id, todo.name, todo.isCompleted, todo.date_created, todo.number_of_days),
        )
    }

    async DeleteTodo(data: any): Promise<Todo[]> {
        const deleteTodo = todoList
            .map((todo) => {
                return todo.id
            })
            .indexOf(data.id)
        todoList.splice(deleteTodo, 1)
        return todoList
    }
    async UpdateTodo(data: any): Promise<Todo[]> {
        const updateTodoIndex = todoList.findIndex((obj) => obj.id === data.id)
        todoList[updateTodoIndex].name = data.name
        return todoList
    }
    async UpdateStatus(data: any): Promise<Todo[]> {
        const updateStatusIndex = todoList.findIndex((obj) => obj.id === data.id)
        todoList[updateStatusIndex].isCompleted = data.isCompleted
        return todoList
    }
}
