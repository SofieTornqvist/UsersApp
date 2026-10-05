import { useQuery } from "@tanstack/react-query"
import UserList from "../components/Users/UserList"
import type { User } from "../types/User"

const Users = () => {
        const { data, isLoading, error } = useQuery<User[]>({
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
        if (!data) return <p>There are no users to display.</p>
    
    return (
        <main className="min-h-screen bg-slate-50 px-8 py-10 flex flex-col items-center">
            <h1 className="mb-8 text-3xl font-bold text-slate-800">
                Users
            </h1>

            <UserList users={data} />
        </main>
    )
}  

export default Users