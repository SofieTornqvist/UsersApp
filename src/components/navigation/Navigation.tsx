import { NavLink } from "react-router-dom"
import { House, Users } from "lucide-react"

const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition ${
        isActive
            ? "bg-white/15 text-white"
            : "text-gray-200 hover:bg-white/10 hover:text-white"
    }`

const Navigation = () => {
    return (
        <header className="sticky top-0 z-10 bg-green-900 shadow-md">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-white">
                <h1 className="text-xl font-bold">UsersApp</h1>

                <div className="flex items-center gap-2">
                    <NavLink to="/" end className={linkClass}>
                        <House size={18} />
                        Home
                    </NavLink>

                    <NavLink to="/users" className={linkClass}>
                        <Users size={18} />
                        Users
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Navigation