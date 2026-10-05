import { Users } from 'lucide-react'

const EmptyMessage = () => {
    return (
        <div className="flex flex-col items-center justify-center py-16 text-center">
            <Users
                size={40}
                className="text-gray-400"
                aria-hidden="true"
            />

            <h2 className="mt-4 text-lg font-semibold text-gray-900">
                No users found
            </h2>

            <p className="mt-2 max-w-md text-sm text-gray-500">
                There are currently no users to display.
            </p>
        </div>
    )
}

export default EmptyMessage