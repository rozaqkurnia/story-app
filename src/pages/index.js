import Head from "next/head"
import AppLayout from "@/components/Layouts/AppLayout"
import Hero from "@/components/Hero"
import Link from "next/link"
import LyricsCard from "@/components/LyricsCard"

const Home = () => {
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
                    <LyricsCard />
                </div>
                <div className="lg:w-1/3 lg:flex-none px-2 lg:px-4 overflow-hidden">
                    <div className="my-4 grid grid-cols-2 gap-3">
                        {/* Iterate genres */}
                        <div className="h-24 rounded-md shadow-lg grid items-center hover:opacity-80 bg-white dark:bg-gray-800">
                            <a className="text-center">Pop</a>
                        </div>
                        <div className="h-24 rounded-md shadow-lg grid items-center hover:opacity-80 bg-white dark:bg-gray-800">
                            <a className="text-center">Rock</a>
                        </div>
                        <div className="h-24 rounded-md shadow-lg col-span-2 grid items-center hover:opacity-80 bg-white dark:bg-gray-800">
                            <a className="text-center">Alternative</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container px-5 py-12 mx-auto">
                <div className="mb-12">
                    <div className="flex-justify-center">
                        {/* Iterate Artist */}
                        <a href="" className="inline-block ml-2 tracing-wide text-xs font-medium title-font py-0.5 px-1.5 border-indigo-500 uppercase bg-white text-indigo-500">Artist</a>
                        <a href="" className="inline-block ml-2 tracing-wide text-xs font-medium title-font py-0.5 px-1.5 border-indigo-500 uppercase bg-white text-indigo-500">Composer</a>
                        <a href="" className="inline-block ml-2 tracing-wide text-xs font-medium title-font py-0.5 px-1.5 border-indigo-500 uppercase bg-white text-indigo-500">Songwriter</a>
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