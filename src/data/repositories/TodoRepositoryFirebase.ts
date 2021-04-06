import { Todo } from "../../domain/entities/Todo"
import { TodoRepository } from "../../domain/repositories/TodoRepository"
import firebase from "./firebase/firebase"

class todoDTO {
    id = ""
    name = ""
    isCompleted = false
    date_created = ""
    number_of_days = 0
}
const db = firebase.firestore()
export class TodoRepositoryFirebase implements TodoRepository {
    async GetTodos(): Promise<Todo[]> {
        const todoLists: any[] = []
        await db
            .collection("Todo")
            .get()
            .then((todo) => {
                todo.docs.forEach((doc) => {
                    todoLists.push({
                        id: doc.id,
                        name: doc.data().name,
                        isCompleted: doc.data().isCompleted,
                        date_created: doc.data().date_created,
                        number_of_days: doc.data().number_of_days,
                    })
                })
            })
            .catch(function (error) {
                console.log(error)
            })
        return todoLists.map(
            (todo: todoDTO) => new Todo(todo.id, todo.name, todo.isCompleted, todo.date_created, todo.number_of_days),
        )
    }

    async AddTodo(data: any): Promise<Todo[]> {
        await db.collection("Todo").doc(data.id).set({
            id: data.id,
            name: data.name,
            isCompleted: data.isCompleted,
            date_created: data.date_created,
            number_of_days: data.number_of_days,
        })
        return data
    }

    async DeleteTodo(data: any): Promise<Todo[]> {
        await db.collection("Todo").doc(data.id).delete()
        return data
    }
    async UpdateTodo(data: any): Promise<Todo[]> {
        await db.collection("Todo").doc(data.id).update({ name: data.name })
        return data
    }
    async UpdateStatus(data: any): Promise<Todo[]> {
        await db.collection("Todo").doc(data.id).update({ isCompleted: data.isCompleted })
        return data
    }
}
