import type { User } from "../../types/User"

type UserCardProps = {
    user: User
}

const UserCard = ({ user }: UserCardProps) => {
    return (
        <div>
            <h2>{user.profile.name}</h2>
            <p>@{user.username}</p>
            <p>{user.profile.email}</p>
            <p>
                {user.profile.address.street}, {user.profile.address.city}
            </p>
        </div>
    )
}

export default UserCard