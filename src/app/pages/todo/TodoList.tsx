import React, { useState } from "react"
import { connect, useDispatch } from "react-redux"
import { refreshTodo, addTodo } from "../../redux/todo/Todo.action"
import { TodoProps, Todo } from "../../redux/todo/Todo.types"

interface RootState {
    todos: any
}
const TodoList = ({ todos }: TodoProps) => {
    const [data, setData] = useState({
        id: 0,
        name: "",
    })
    const handleOnChange = (e: any) => {
        setData({ ...data, id: todos.length + 1, [e.target.name]: e.target.value })
        console.log(e.target.value)
    }
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(refreshTodo)
    }
    const AddTodoOnClick = () => {
        dispatch(addTodo(data))
        dispatch(refreshTodo)
    }
    return (
        <div>
            <button onClick={handleClick}>Refresh</button>
            <div>
                <input name="name" onChange={handleOnChange} />
                <button onClick={AddTodoOnClick}>ADD TODO</button>
            </div>
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
