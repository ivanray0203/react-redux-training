import React, { useState } from "react"
import { connect, useDispatch } from "react-redux"
import { refreshTodo, addTodo, deleteTodo, updateTodo, updateTodoStatus } from "../../redux/todo/Todo.action"
import { TodoProps, Todo } from "../../redux/todo/Todo.types"

interface RootState {
    todos: any
}
const TodoList = ({ todos }: TodoProps) => {
    const [editable, setEditable] = useState(false)
    const [data, setData] = useState({
        id: 0,
        name: "",
        isCompleted: false,
    })
    const [toUpdate, setToUpdate] = useState({
        id: 0,
        name: "",
    })
    const handleOnChange = (e: any) => {
        setData({ ...data, id: todos.length + 1, [e.target.name]: e.target.value, isCompleted: false })
        setToUpdate({ ...data, id: handleId, [e.target.name]: e.target.value })
    }
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(refreshTodo)
    }
    const AddTodoOnClick = () => {
        dispatch(addTodo(data))
        dispatch(refreshTodo)
        setData({ ...data, id: 0, name: "" })
    }
    const [handleName, setHandleName] = useState("")
    const [handleId, setHandleId] = useState(0)
    const DeleteTodo = (id: number) => {
        dispatch(deleteTodo(id))
    }
    const editData = (id: number, name: string) => {
        setEditable(true)
        setHandleName(name)
        setHandleId(id)
        setData({ ...data, id: 0, name: name })
    }
    const CancelEdit = () => {
        setEditable(false)
        setData({ ...data, id: 0, name: "" })
    }
    const UpdateData = () => {
        if (handleName === data.name) {
            alert("Error")
        } else {
            setToUpdate({ ...toUpdate, id: toUpdate.id, name: data.name })
            dispatch(updateTodo(toUpdate))
            setEditable(false)
            setData({ ...data, id: 0, name: "" })
        }
    }
    const changeStatus = (id: number, isCompleted: boolean) => {
        const updateDataStatus = {
            id: id,
            isCompleted: !isCompleted,
        }
        dispatch(updateTodoStatus(updateDataStatus))
    }
    return (
        <div className="mt-2">
            <button onClick={handleClick}>Refresh</button>
            <div className="row m-2">
                <input className="col form-control" name="name" onChange={handleOnChange} value={data.name} />
                {editable ? (
                    <button className="btn btn-warning mx-2" onClick={UpdateData}>
                        Update
                    </button>
                ) : (
                    <button className="btn btn-primary mx-2" onClick={AddTodoOnClick}>
                        ADD TODO
                    </button>
                )}

                {editable ? (
                    <button className="btn btn-danger mx-2" onClick={CancelEdit}>
                        Cancel
                    </button>
                ) : (
                    ""
                )}
            </div>
            {todos.map((todos: Todo) => (
                <div key={todos.id} className="row m-3">
                    <div className="mt-1">
                        <input
                            type="checkbox"
                            className="form-conrol"
                            checked={todos.isCompleted ? true : false}
                            onChange={() => changeStatus(todos.id, todos.isCompleted)}
                        />
                    </div>
                    <div className="col">
                        <h4 className={todos.isCompleted ? "completeTodo" : ""}>{todos.name}</h4>
                    </div>
                    <div className={todos.isCompleted ? "col completed" : "col notCompleted"}>
                        {todos.isCompleted ? "COMPLETED" : "NOT COMPLETED"}
                    </div>
                    <button className="btn btn-primary mx-1" onClick={() => editData(todos.id, todos.name)}>
                        Edit
                    </button>
                    <button className="btn btn-danger mx-1" onClick={() => DeleteTodo(todos.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = (state: RootState) => {
    console.log("TodoList", state.todos)
    return {
        todos: state.todos.todos,
    }
}

export default connect(mapStateToProps)(TodoList)
