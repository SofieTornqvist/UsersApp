import { Link } from "react-router-dom"
import { House, Users } from "lucide-react"

const Navigation = () => {
    return (
         <nav className="flex items-center justify-between bg-green-900 px-6 py-4 text-white">
            <h1 className="text-xl font-bold">
                UsersApp
            </h1>

            <div className="flex items-center gap-6">
                <Link
                to="/"
                className="flex items-center gap-2 hover:text-slate-300"
                >
                <House size={18} />
                Home
                </Link>

                <Link
                to="/users"
                className="flex items-center gap-2 hover:text-slate-300"
                >
                <Users size={18} />
                Users
                </Link>
            </div>
        </nav>
    )
}

export default Navigation