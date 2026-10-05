import UserCard from "./UserCard"
import type { User } from "../../types/User"

type UserListProps = {
    users: User[]
}

const UserList = ({ users }: UserListProps) => {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    )
}

export default UserList