const LoadingMessage = () => {
    return (
        <div className="flex flex-col items-center justify-center py-16">
            <div
                className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-gray-900"
                aria-label="Loading"
            />

            <p className="mt-4 text-sm text-gray-500">
                Loading users...
            </p>
        </div>
    )
}

export default LoadingMessage