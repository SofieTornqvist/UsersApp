import { CircleAlert } from 'lucide-react'
import type { FallbackProps } from 'react-error-boundary'

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
    return (
        <div
            role="alert"
            className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center"
        >
            <CircleAlert
                size={40}
                className="text-red-500"
                aria-hidden="true"
            />

            <h1 className="mt-4 text-2xl font-semibold text-gray-900">
                Something went wrong
            </h1>

            <p className="mt-3 max-w-md text-sm text-gray-500">
                Something unexpected happened. Please try again.
            </p>

            <button
                type="button"
                onClick={resetErrorBoundary}
                className="mt-6 rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
                Try again
            </button>

            {import.meta.env.DEV && (
                <p className="mt-4 max-w-lg text-xs text-gray-400">
                    {error instanceof Error ? error.message : String(error)}
                </p>
            )}
        </div>
    )
}

export default ErrorFallback