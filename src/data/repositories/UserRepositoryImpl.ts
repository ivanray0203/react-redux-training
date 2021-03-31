import { User } from "../../domain/entities/User"
import { UserRepository } from "../../domain/repositories/UserRepository"

class UserDTO {
    id = 0
    first_name = ""
    last_name = ""
}

export class UserRepositoryImpl implements UserRepository {
    json_url = "https://reqres.in/api/users"

    async GetUsers(): Promise<User[]> {
        const res = await fetch(this.json_url)
        const jsonData = await res.json()
        return jsonData.data.map((user: UserDTO) => new User(user.id, user.first_name, user.last_name))
    }
}
