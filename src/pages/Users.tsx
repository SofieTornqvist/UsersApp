import { useQuery } from "@tanstack/react-query"

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
            }
        })
        if (isLoading) return <p>Loading..</p>
        if (error) return <p>{error.message}</p>
    
    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}  

export default Users