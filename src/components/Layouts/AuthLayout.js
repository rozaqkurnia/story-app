import Head from "next/head"

const AuthLayout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Angkoru</title>
            </Head>

            <div className="font-sans text-gray-900">
                {children}
            </div>
        </div>
    )
}

export default AuthLayout