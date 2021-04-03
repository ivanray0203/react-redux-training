import {
    TODO_LIST_REQUEST,
    TODO_LIST_SUCCESS,
    TODO_LIST_FAILURE,
    ADD_TODO_LIST,
    DELETE_TODO_LIST,
    UPDATE_TODO_LIST,
    UPDATE_TODO_STATUS,
} from "./Todo.types"
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
                dispatch({ type: DELETE_TODO_LIST })
                dispatch(refreshTodo)
            })
        } catch (error) {
            console.log(error)
            dispatch({ type: TODO_LIST_FAILURE })
        }
    }
}

export const updateTodo = (data: any) => {
    return async function (dispatch: any) {
        try {
            const todoRepo = new TodoRepositoryImpl()
            const todoService = new TodoServiceImpl(todoRepo)
            await todoService.UpdateTodo(data).then(() => {
                dispatch({ type: UPDATE_TODO_LIST })
                dispatch(refreshTodo)
            })
        } catch (error) {
            console.log(error)
            dispatch({ type: TODO_LIST_FAILURE })
        }
    }
}

export const updateTodoStatus = (data: any) => {
    return async function (dispatch: any) {
        try {
            const todoRepo = new TodoRepositoryImpl()
            const todoService = new TodoServiceImpl(todoRepo)
            await todoService.UpdateStatus(data).then(() => {
                dispatch({ type: UPDATE_TODO_STATUS })
                dispatch(refreshTodo)
            })
        } catch (error) {
            console.log(error)
            dispatch({ type: TODO_LIST_FAILURE })
        }
    }
}
