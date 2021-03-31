import React from "react"
import { connect, useDispatch } from "react-redux"
import { refreshTodo } from "../../redux/todo/Todo.action"
import { TodoProps, Todo } from "../../redux/todo/Todo.types"

interface RootState {
    todos: any
}
const TodoList = ({ todos }: TodoProps) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(refreshTodo)
    }
    return (
        <div>
            <button onClick={handleClick}>Refresh</button>
            <ul>
                {todos.map((todos: Todo) => (
                    <li key={todos.id}>{todos.name}</li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state: RootState) => {
    console.log(state.todos)
    return {
        todos: state.todos.todos,
    }
}

export default connect(mapStateToProps)(TodoList)
