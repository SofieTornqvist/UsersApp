import UserCard from "./UserCard"
import type { User } from "../../types/User"

type UserListProps = {
    users: User[]
}

const UserList = ({ users }: UserListProps) => {
    return (
        <div>
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    )
}

export default UserList