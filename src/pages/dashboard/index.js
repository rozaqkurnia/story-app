import AdminLayout from "@/components/Layouts/AdminLayout"

const Dashboard = () => {
    return (
        <AdminLayout>
            <header id="header" className="mb-10 md:flex md:items-start">
                <div className="flex-auto max-w-4xl">
                    <p className="mb-4 text-sm leading-6 font-semibold text-rose-500 dark:text-rose-400">Installation</p>
                    <h1 className="text 3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight dark:text-gray-200">Get started with Tailwind CSS</h1>
                    <p className="mt-3 text-lg text-gray-700 dark:text-gray-400">
                        "Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, genreating the corresponding styles and then writing them to a static CSS file."
                    </p>
                    <p className="mt-4 text-lg text-gray-700 dark:text-gray-400">It's fast, flexible, and reliable -- with zero-runtime.</p>
                </div>
            </header>
            <section className="mb-16 relative">
                <div id="content" className="relative z-10 prose mb-16 max-w-3xl dark:prose-dark">
                    <h3 className="sr-only">Installing Tailwind CLI</h3>
                    <p>
                        "The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool."
                    </p>
                </div>
            </section>
            <footer className="text-sm leading-6 mt-16">
                <div className="pt-10 pb-28 border-t border-gray-200 sm:flex justify-between text-gray-500 dark:border-gray-200/5">
                    <div className="mb-6sm:mb-0 sm:flex">
                        <p>Copyright 2021 Angkoru</p>
                        <p className="sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 dark:sm:border-gray-200/5">
                            <a className="hover:text-gray-900 dark:hover:text-gray-400">Trademark Plocy</a>
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

export default Dashboard