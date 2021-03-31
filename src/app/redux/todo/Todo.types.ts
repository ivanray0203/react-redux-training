export const TODO_LIST_REQUEST = "TODO_LIST_REQUEST"
export const TODO_LIST_SUCCESS = "TODO_LIST_SUCCESS"
export const TODO_LIST_FAILURE = "TODO_LIST_FAILURE"

export type TodoProps = {
    todos: Todo[]
    refreshTodo: () => Todo[]
}

export type TodoActionType = RefreshTodoListSuccess

export interface RefreshTodoListSuccess {
    type: typeof TODO_LIST_SUCCESS
    payload: Todo[]
}

export interface Todo {
    id: number
    name: string
}
