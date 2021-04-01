import { TODO_LIST_REQUEST, TODO_LIST_SUCCESS, TODO_LIST_FAILURE, ADD_TODO_LIST, DELETE_TODO_LIST } from "./Todo.types"
import { TodoServiceImpl } from "../../../domain/usecases/TodoService"
import { TodoRepositoryImpl } from "../../../data/repositories/TodoRepositoryImpl"

export const refreshTodo = async (dispatch: any) => {
    dispatch({ type: TODO_LIST_REQUEST })

    try {
        const todoRepo = new TodoRepositoryImpl()
        const todoService = new TodoServiceImpl(todoRepo)
        const todo = await todoService.GetTodos()
        dispatch({ type: TODO_LIST_SUCCESS, payload: todo })
    } catch (error) {
        console.log(error)
        dispatch({ type: TODO_LIST_FAILURE })
    }
}

export const addTodo = (data: any) => {
    return async function (dispatch: any) {
        try {
            const todoRepo = new TodoRepositoryImpl()
            const todoService = new TodoServiceImpl(todoRepo)
            await todoService.AddTodo(data).then(() => {
                dispatch({ type: ADD_TODO_LIST })
            })
        } catch (error) {
            console.log(error)
            dispatch({ type: TODO_LIST_FAILURE })
        }
    }
}

export const deleteTodo = (id: number) => {
    return async function (dispatch: any) {
        try {
            const todoRepo = new TodoRepositoryImpl()
            const todoService = new TodoServiceImpl(todoRepo)
            await todoService.DeleteTodo(id).then(() => {
                const todo = todoService.GetTodos()
                dispatch({ type: DELETE_TODO_LIST, payload: todo })
                dispatch(refreshTodo)
            })
        } catch (error) {
            console.log(error)
            dispatch({ type: TODO_LIST_FAILURE })
        }
    }
}
