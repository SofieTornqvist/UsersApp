import { CircleAlert } from 'lucide-react'

const ErrorMessage = () => {
    return (
        <div className="flex flex-col items-center justify-center py-16 text-center">
            <CircleAlert
                size={40}
                className="text-red-500"
                aria-hidden="true"
            />

            <h2 className="mt-4 text-lg font-semibold text-gray-900">
                Unable to load users
            </h2>

            <p className="mt-2 max-w-md text-sm text-gray-500">
                We couldn't retrieve the users right now.
                Please try again later.
            </p>
        </div>
    )
}

export default ErrorMessage