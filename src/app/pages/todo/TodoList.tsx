import React, { useState } from "react"
import { connect, useDispatch } from "react-redux"
import { refreshTodo, addTodo, deleteTodo, updateTodo, updateTodoStatus } from "../../redux/todo/Todo.action"
import { TodoProps, Todo } from "../../redux/todo/Todo.types"

interface RootState {
    todos: any
}
const TodoList = ({ todos }: TodoProps) => {
    const [editable, setEditable] = useState(false)
    const dateNow = new Date()
    const randomId = new Date().getTime().toString()
    const todayDate = dateNow.toISOString().slice(0, 10)
    const [data, setData] = useState({
        id: "",
        name: "",
        isCompleted: false,
        date_created: todayDate,
        number_of_days: 0,
    })
    const [toUpdate, setToUpdate] = useState({
        id: "",
        name: "",
    })
    const handleOnChange = (e: any) => {
        setData({ ...data, id: randomId, [e.target.name]: e.target.value, isCompleted: false })
        setToUpdate({ ...data, id: handleId, [e.target.name]: e.target.value })
    }
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(refreshTodo)
    }
    const AddTodoOnClick = () => {
        dispatch(addTodo(data))
        setData({ ...data, id: "", name: "" })
    }
    const [handleId, setHandleId] = useState("")
    const DeleteTodo = (data: any) => {
        dispatch(deleteTodo(data))
    }
    const editData = (id: string, name: string) => {
        setEditable(true)
        setHandleId(id)
        setData({ ...data, id: id, name: name })
    }
    const CancelEdit = () => {
        setEditable(false)
        setData({ ...data, id: "", name: "" })
    }
    const UpdateData = () => {
        setToUpdate({ ...toUpdate, id: toUpdate.id, name: data.name })
        dispatch(updateTodo(toUpdate))
        setEditable(false)
        setData({ ...data, id: "", name: "" })
    }
    const changeStatus = (id: string, isCompleted: boolean) => {
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
                    <div className={todos.number_of_days ? "col" : "col completed"}>
                        {todos.number_of_days == 0 ? "NEW TODO" : todos.number_of_days + " days since todo created"}
                    </div>
                    <button className="btn btn-primary mx-1" onClick={() => editData(todos.id, todos.name)}>
                        Edit
                    </button>
                    <button className="btn btn-danger mx-1" onClick={() => DeleteTodo(todos)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        todos: state.todos.todos,
    }
}

export default connect(mapStateToProps)(TodoList)
