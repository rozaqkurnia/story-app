import { useAuth } from "@/hooks/auth"
import { useRouter } from "next/router"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

const Navigation = ({ user }) => {
    const router = useRouter()

    const logout = useAuth()

    const [open, setOpen] = useState(false)

    return (
        <nav className="bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-3 mx-auto md:flex">
                <div className="flex items-center justify-between">
                    <div>
                        <Link href="/">
                            <a className="text-xl font-bold text-rose-600 dark:text-rose-400 transition-colors duration-200 transform lg:text-2xl hover:text-rose-400 dark:hover:text-rose-600">
                                Angkoru
                            </a>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                <div className="w-full md:flex hidden md:block md:items-center md:justify-between">
                    <div className="flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0">
                        <Link href="#">
                            <a className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100">Story</a>
                        </Link>
                        <Link href="#">
                            <a className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100">Lyrics</a>
                        </Link>
                    </div>

                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </span>

                        <input type="text" className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Search" />
                    </div>
                    {/* Auth */}
                    <div className="flex md:justify-between items-center py-2 -mx-1 md:mx-0">
                        <button className="mx-1 text-gray-600 transition-colors duration-200 transform md:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        {user && (
                            <div className="relative">
                                <div className="block">
                                    <button type="button" className="flex items-center focus:outline-none">
                                        <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                                            <Image
                                                src={`https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80`}
                                                alt="avatar"
                                                width={8}
                                                height={8}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        <h3 className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-200">username</h3>
                                    </button>
                                </div>
                                <div className="hidden absolute z-50 mt-2 w-48 rounded-md shadow-lg left-0">
                                    <div className="rounded-md ring-1 ring-black ring-opacity-5 py-1 bg-white">
                                        <button onClick={logout} className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100">Logout</button>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* Unauthenticated */}
                        {! user && (
                            <div className="flex items-center py-2 -mx-1 md:mx-0">
                                <Link href="/login">
                                    <a className="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-gray-900 dark:text-white transition-colors duration-200 transform hover:text-gray-800 dark:hover:text-gray-100 md:mx-2 md:w-auto">
                                        Login
                                    </a>
                                </Link>
                                <Link href="/register">
                                    <a className="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-sky-500 rounded hoer:bg-sky-600 md:mx-0 md:w-auto">
                                        Join free
                                    </a>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation