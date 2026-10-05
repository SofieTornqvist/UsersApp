import { useQuery } from "@tanstack/react-query"
import UserList from "../components/Users/UserList"

const Users = () => {
        const { data, isLoading, error } = useQuery({
            queryKey: ['users'],
            queryFn: async () => {
                const res = await fetch("https://api-userapi.onrender.com/api/users/getUsers", {
                    headers: {
                        "x-api-key": import.meta.env.VITE_API_KEY
                    }
                }) 
                if (!res.ok) throw new Error ("Could not fetch users")
                    return res.json()
                },
                staleTime: 10 * 60 * 1000
        })

        if (isLoading) return <p>Loading..</p>
        if (error) return <p>{error.message}</p>
    
    return (
        <div>
            <UserList users={data} />
        </div>
    )
}  

export default Users