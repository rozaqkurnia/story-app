import AuthCard from '@/components/AuthCard'
import Button from '@/components/Button'
import AuthLayout from '@/components/Layouts/AuthLayout'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'

const VerifyEmail = () => {
    const { logout, resendEmailVerification } = useAuth({
        middleware: 'auth',
    })

    const [status, setStatus] = useState(null)

    return (
        <AuthLayout>
            <AuthCard
                logo={
                    <Link href="/">
                        <a>
                            Angkoru
                        </a>
                    </Link>
                }
            >
                <div className="mb-4 text-sm text-gray-600">
                    Thanks for signing up! To complete the registration, we just send an verification link to your email address.
                    If you didn't receive the email, we will send you another.
                </div>

                {status == 'verification-link-sent' && (
                    <div className="mb-4 font-medium text-sm text-green-600">
                        A new verification link has been sent to the email address
                        you provided during registration
                    </div>
                )}

                <div className="mt-4 flex items-center justify-betweeen">
                    <Button
                        onClick={() => resendEmailVerification({status})}
                    >
                        Resend Verification Email
                    </Button>

                    <button
                        type="button"
                        className="underline text-sm text-gray-600 hover:text-gray-900"
                        onClick={logout}
                    >
                        Logout
                    </button>
                </div>
            </AuthCard>
        </AuthLayout>
    )
}

export default VerifyEmail