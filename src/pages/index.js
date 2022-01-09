import Head from "next/head"
import AppLayout from "@/components/Layouts/AppLayout"
import Hero from "@/components/Hero"
import Link from "next/link"
import LyricsCard from "@/components/LyricsCard"
import axios from "@/lib/axios"

export async function getServerSideProps(ctx) {
    const { res } = ctx
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59',
    );

    const response = await axios.get('/api/resources')

    return {
        props: {
            songs: response.data.data.songs,
            genres: response.data.data.genres,
            artists: response.data.data.artists,
        },
    }
}

const Home = ({ songs, genres, artists }) => {
    return (
        <AppLayout>
            <Head>
                <title>Angkoru</title>
            </Head>
            <Hero />
            <section className="container lg:mx-auto lg:flex px-2 lg:px-36 justify-between">
                <div className="lg:w-2/3 p-2 lg:p-4 lg:grow overflow-hidden">
                    <div className="flex justify-between">
                        <h3 className="font-semibold text-xl text-gray-600 dark:text-gray-100">Latest song lyrics</h3>
                        <Link href="/lyrics">
                            <a className="text-red-400 hover:text-red-200">See more</a>
                        </Link>
                    </div>
                    {/* Iterate Song */}
                    {songs.map((song, index) => (
                        <LyricsCard song={song} key={index} />
                    ))}
                </div>
                <div className="lg:w-1/3 lg:flex-none px-2 lg:px-4 overflow-hidden">
                    <div className="my-4 grid grid-cols-2 gap-3">
                        {/* Iterate genres */}
                        {genres.map((genre, index) => (
                            <div key={index} className={`h-24 rounded-md shadow-lg ${index%3==0 ? 'col-span-2' : ''} grid items-center hover:opacity-80 bg-white dark:bg-gray-800`}>
                                <Link
                                    href={{
                                        pathname: 'genre/[slug]',
                                        query: { slug: genre.slug },
                                    }}
                                >
                                    <a className="text-center">{genre.name}</a>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="container px-5 py-12 mx-auto">
                <div className="mb-12">
                    <div className="flex-justify-center">
                        {/* Iterate Artist */}
                        {artists.map((artist, index) => (
                            <Link
                                href={{
                                    pathname: 'artist/[slug]',
                                    query: { slug: artist.slug }
                                }}
                            >
                                <a className="inline-block ml-2 tracing-wide text-xs font-medium title-font py-0.5 px-1.5 border-indigo-500 uppercase bg-white text-indigo-500">{artist.name}</a>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="mb-12">
                    <h2 className="text-2xl font-medium text-gray-900 title-font px-4">All posts</h2>
                </div>
            </section>
        </AppLayout>
    )
}

export default Home