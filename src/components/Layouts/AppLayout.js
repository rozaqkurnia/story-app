import Navigation from "./Navigation"
import Footer from "./Footer"
import { useAuth } from "@/hooks/auth"


const AppLayout = ({ children }) => {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Navigation user={user} />
            <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default AppLayout