import AdminLayout from "@/components/Layouts/AdminLayout"
import axios from "@/lib/axios"

export async function getServerSideProps(ctx) {
    const { res } = ctx
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59',
    );

    const response = await axios.get('/api/songs')

    return {
        props: {
            songs: response.data.data,
            links: response.data.links,
            meta: response.data.meta,
        },
    }
}

const Songs = ({ songs, links, meta }) => {
    return (
        <AdminLayout>
            <header id="header" className="mb-10 md:flex md:items-start">
                <div className="flex-auto max-w-4xl">
                    <p className="mb-4 text-sm leading-6 font-semibold text-rose-500 dark:text-rose-400">Resources</p>
                    <h1 className="text 3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight dark:text-gray-200">List Songs</h1>
                    <p className="mt-3 text-lg text-gray-700 dark:text-gray-400">
                        "Another space to write something"
                    </p>
                </div>
            </header>
            <section className="mb-16 relative">
                <div id="content" className="bg-white border rounded overflow-x-auto lg-py-2">
                    <h3 className="sr-only">Installing Tailwind CLI</h3>
                    <table className="table-auto w-full whitespace-no-wrap">
                        <thead>
                            <tr className="text-center font-semibold">
                                <th className="px-6 pt-6 pb-4">No</th>
                                <th className="px-6 pt-6 pb-4">Name</th>
                                <th className="px-6 pt-6 pb-4">Title</th>
                                <th className="px-6 pt-6 pb-4">Slug</th>
                                <th className="px-6 pt-6 pb-4">Artist</th>
                                <th className="px-6 pt-6 pb-4">Status</th>
                                <th className="px-6 pt-6 pb-4">Publish At</th>
                                <th className="px-6 pt-6 pb-4">Create By</th>
                                <th className="px-6 pt-6 pb-4">Create At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {songs.map((song, index) => (
                                <tr 
                                    key={index}
                                    className="hover:bg-gray-100 focus-within:bg-gray-100"
                                >
                                    <td className="border-t text-center">{index+1}</td>
                                    <td className="border-t">{song.name}</td>
                                    <td className="border-t">{song.title}</td>
                                    <td className="border-t">{song.slug}</td>
                                    <td className="border-t">{song.artists.map((artist, idx) => (
                                        <>{artist.name}</>
                                    ))}</td>
                                    <td className="border-t">{song.isDraft ? 'draft' : (song.isPublished ? 'published' : '')}</td>
                                    <td className="border-t">{new Date(song.publishedAt * 1000).toLocaleDateString()}</td>
                                    <td className="border-t">{song.publishedBy}</td>
                                    <td className="border-t">{new Date(song.createdAt * 1000).toLocaleDateString()}</td>
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            <footer className="text-sm leading-6 mt-16">
                <div className="pt-10 pb-28 border-t border-gray-200 sm:flex justify-between text-gray-500 dark:border-gray-200/5">
                    <div className="mb-6sm:mb-0 sm:flex">
                        <p>Copyright 2021 Angkoru</p>
                        <p className="sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 dark:sm:border-gray-200/5">
                            <a className="hover:text-gray-900 dark:hover:text-gray-400">Trademark Policy</a>
                        </p>
                    </div>
                    <div className="flex space-x-10 text-gray-400 dark:text-gray-500">
                        <a className="hover:text-gray-500 dark:hover:text-gray-400">Github</a>
                        <a className="hover:text-gray-500 dark:hover:text-gray-400">Diskord</a>
                    </div>
                </div>
            </footer>
        </AdminLayout>
    )
}

export default Songs