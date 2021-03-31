import { TODO_LIST_REQUEST, TODO_LIST_SUCCESS, TODO_LIST_FAILURE } from "./Todo.types"
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
