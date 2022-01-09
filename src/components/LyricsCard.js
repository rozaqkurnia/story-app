import Image from "next/image"
import Link from "next/link"
import { formatDistanceToNow } from "date-fns"

const LyricsCard = ({ song }) => {
    
    const publishDate = formatDistanceToNow(new Date(song.publishedAt * 1000), { addSuffix: true });

    return (
        <div className="flex bg-white dark:bg-gray-800 rounded-lg my-3 shadow-lg hover:opacity-80">
            <div className="w-1/4 p-1 relative">
                {song.featuredImage && (
                    <Image 
                        unoptimized={true}
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${song.featuredImage}`}
                        alt={song.slug}
                        layout="fill"
                        objectFit="cover"
                        priority
                        className="rounded-center h-36 w-36"
                    />
                )}
            </div>
            <div className="w-3/4 p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-sm text-gray-800 dark:text-gray-100 mx-1">
                            {/* Iterate Performers */}
                            {song.artists.map((artist, idx) => (
                                <Link
                                    href={{
                                        pathname: '/artist/[slug]',
                                        query: { slug: artist.slug },
                                    }}
                                    key={idx}
                                >
                                    <a className="text-red-500 hover:text-gray-700 dark:hover:text-gray-300 hover:underline">{artist.name}</a>
                                </Link>
                            ))}
                        </span>
                    </div>
                </div>
                <div>
                    <Link
                        href={{
                            pathname: '/lyrics/[slug]',
                            query: { slug: song.slug },
                        }}
                    >
                        <a className="text-lg md:text-lg font-bold text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 hover:underline">{song.title}</a>
                    </Link>
                </div>
                {/* Iterate Genre */}
                {song.genres.map((genre, idx) => (
                    <Link
                        href={{
                            pathname: '/genre/[slug]',
                            query: { slug: genre.slug },
                        }}
                        key={idx}
                    >
                        <a className="text-sm uppercase mr-2 text-red-500 dark:text-red-300 hover:underline">{genre.name}</a>
                    </Link>
                ))}
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{song.excerpt}</p>
                <div className="flex justify-between mt-3 item-center">
                    <p className="text-xs text-gray-700 dark:text-gray-200">Posted by {song.publishedBy} {publishDate}</p>
                    <div className="flex justify-between space-x-2">
                        {song.likesCount > 0 && (
                            <a className="text-xs text-gray-700 dark:text-gray-200">{song.likesCount} Likes</a>
                        )}
                        {song.commentsCount > 0 && (
                            <a className="text-xs text-gray-700 dark:text-gray-200">{song.commentsCount} Comments</a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LyricsCard