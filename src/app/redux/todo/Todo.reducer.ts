import {
    TODO_LIST_REQUEST,
    TODO_LIST_SUCCESS,
    TODO_LIST_FAILURE,
    RefreshTodoListSuccess,
    ADD_TODO_LIST,
    DELETE_TODO_LIST,
    UPDATE_TODO_LIST,
    UPDATE_TODO_STATUS,
} from "./Todo.types"

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
        case ADD_TODO_LIST:
            return {
                ...state,
                todos: state.todos,
            }
        case DELETE_TODO_LIST:
            return {
                ...state,
                todos: state.todos,
            }
        case UPDATE_TODO_LIST:
            return {
                ...state,
                todos: state.todos,
            }
        case UPDATE_TODO_STATUS:
            return {
                ...state,
                todos: state.todos,
            }
        default:
            return state
    }
}

export default todos
