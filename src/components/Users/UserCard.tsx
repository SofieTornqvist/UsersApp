import { Mail, MapPin } from "lucide-react"
import type { User } from "../../types/User"

type UserCardProps = {
    user: User
}

const UserCard = ({ user }: UserCardProps) => {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/20">
            <div className="mb-4 flex items-center gap-4 border-b border-slate-100 pb-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 font-semibold text-green-900">
                    {user.profile.name.charAt(0)}
                </div>

                <div className="min-w-0">
                    <h2 className="truncate font-semibold text-slate-900">
                        {user.profile.name}
                    </h2>

                    <p className="text-sm text-slate-400">
                        @{user.username}
                    </p>
                </div>
            </div>

            <p className="mb-2 flex items-center gap-2 text-sm text-slate-600">
                <Mail size={16} className="shrink-0 text-green-700" />
                <span className="truncate">{user.profile.email}</span>
            </p>

            <p className="flex items-center gap-2 text-sm text-slate-600">
                <MapPin size={16} className="shrink-0 text-green-700" />
                {user.profile.address.city}
            </p>
        </div>
    )
}

export default UserCard