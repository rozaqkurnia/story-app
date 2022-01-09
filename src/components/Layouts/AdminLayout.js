import { useAuth } from "@/hooks/auth"
import Link from "next/link"

const AdminLayout = ({ children }) => {
    const { user } = useAuth({ middleware:'auth' })

    return (
        <>
            <div className="sticky top-0 z-40 w-full flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-gray-200 dark:border-gray-100 bg-white dark:bg-transparent">
                <div className="max-w-8xl mx-auto">
                    <div className="py-4 border-b border-gray-200 lg:p-4 lg:border-0 dark:border-gray-100 mx-4 lg:mx-0">
                        <div className="relative flex items-center">
                            <Link href="/">
                                <a className="ml-3 flex-none text-xl font-bold text-rose-600 dark:text-rose-400 transition-colors duration-200 transform lg:text-2xl hover:text-rose-400 dark:hover:text-rose-600">Angkoru</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
                    <div className="hidden lg:block fixed z-20 inset-0 top-24 right-auto w-1/4 pb-10 px-8 overflow-y-auto">
                        <nav id="nav" className="lg:text-sm lg:leading-6 relative">
                            <ul>
                                <li className="mt-12 lg:mt-8">
                                    <h5 className="mb-8 lg:mb-3 font-semibold text-gray-900 dark:text-gray-200">Resources</h5>
                                    <ul className="space-y-6 lg:space-y-2 border-l border-gray-100 dark:border-gray-800">
                                        <li>
                                            <a className="block border-l pl-4 -ml-px text-rose-500 border-current font-semibold dark:text-rose-400">Country</a>
                                        </li>
                                        <li>
                                            <a className="block border-l pl-4 -ml-px border-transparent hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gay-300">Language</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="lg:pl-48">
                        <main className="max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none">
                            {children}
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLayout