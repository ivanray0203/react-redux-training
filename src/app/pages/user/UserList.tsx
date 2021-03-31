import React from "react"
import { connect, useDispatch } from "react-redux"
import { refreshUser } from "../../redux/user/user.action"
import { UserProps, User } from "../../redux/user/user.types"

interface RootState {
    users: any
}
const UserList = ({ users }: UserProps) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(refreshUser)
    }
    return (
        <div>
            <button onClick={handleClick}>Refresh</button>
            <ul>
                {users.map((user: User) => (
                    <li key={user.id}>
                        {user.first_name} {user.last_name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state: RootState) => {
    console.log(state.users)
    return {
        users: state.users.users,
    }
}

export default connect(mapStateToProps)(UserList)
