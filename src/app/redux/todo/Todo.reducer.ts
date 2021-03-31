import { TODO_LIST_REQUEST, TODO_LIST_SUCCESS, TODO_LIST_FAILURE, RefreshTodoListSuccess } from "./Todo.types"

const initialState = {
    loading: false,
    todos: [],
}

function todos(state = initialState, action: { type: string; payload: RefreshTodoListSuccess }) {
    switch (action.type) {
        case TODO_LIST_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case TODO_LIST_FAILURE:
            return {
                ...state,
                loading: false,
            }
        case TODO_LIST_SUCCESS:
            return {
                ...state,
                todos: action.payload,
                loading: false,
            }
        default:
            return state
    }
}

export default todos
