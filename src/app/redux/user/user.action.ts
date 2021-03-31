import { USER_LOAD_REQUEST, USER_LOAD_SUCCESS, USER_LOAD_FAILURE } from "./user.types"
import { UserServiceImpl } from "../../../domain/usecases/UserServices"
import { UserRepositoryImpl } from "../../../data/repositories/UserRepositoryImpl"

export const refreshUser = async (dispatch: any) => {
    dispatch({ type: USER_LOAD_REQUEST })

    try {
        const userRepo = new UserRepositoryImpl()
        console.log("user Repo", userRepo)
        const userService = new UserServiceImpl(userRepo)
        console.log("userService", userService)
        const users = await userService.GetUsers()
        console.log("users", users)
        console.log(users)
        dispatch({ type: USER_LOAD_SUCCESS, payload: users })
    } catch (error) {
        console.log(error)
        dispatch({ type: USER_LOAD_FAILURE })
    }
}
