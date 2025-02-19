import { useState } from 'react'

import AuthForm from './AuthForm'
import AuthToggle from './AuthToggle'

interface Props {
  setIsAuthed: (_auth: boolean) => void
}

const AuthPage = ({ setIsAuthed }: Props) => {
  const [isRegistered, setIsRegistered] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const resetForm = () => {
    setError(null)
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          {isRegistered ? 'Sign in to your account' : 'Create your account'}
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <AuthForm
          setIsAuthed={setIsAuthed}
          isRegistered={isRegistered}
          error={error}
          setError={setError}
        />
        <AuthToggle
          isRegistered={isRegistered}
          setIsRegistered={setIsRegistered}
          resetForm={resetForm}
          setError={setError}
        />
      </div>
    </div>
  )
}

export default AuthPage
