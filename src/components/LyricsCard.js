const LyricsCard = () => {
    return (
        <div className="flex bg-white dark:bg-gray-800 rounded-lg my-3 shadow-lg hover:opacity-80">
            <div className="w-1/4 p-1 relative">
                <img src="" alt="" className="object-cover rounded-center h-36 w-36" />
            </div>
            <div className="w-3/4 p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-sm text-gray-800 dark:text-gray-100 mx-1">
                            {/* Iterate Performers */}
                            <a href="" className="text-red-500 hover:text-gray-700 dark:hover:text-gray-300 hover:underline">Performer</a>
                        </span>
                    </div>
                </div>
                <div>
                    <a href="" className="text-lg md:text-lg font-bold text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 hover:underline">Title</a>
                </div>
                {/* Iterate Genre */}
                <a className="text-sm uppercase text-red-500 dark:text-red-300 hover:underline">Genre</a>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">excerpt...</p>
                <div className="flex justify-between mt-3 item-center">
                    <h5 className="text-xs text-gray-700 dark:text-gray-200">Posted by Name on Created At</h5>
                    <div className="flex justify-between space-x-2">
                        <h5 className="text-xs text-gray-700 dark:text-gray-200">Like</h5>
                        <h5 className="text-xs text-gray-700 dark:text-gray-200">Comment</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LyricsCard