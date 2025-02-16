import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useField } from '../../hooks'
import loginService from '../../services/login'

interface Props {
  // isAuthed: boolean
  setIsAuthed: (auth: boolean) => void
}

//FIXME: Add name field to sign up
const AuthPage: React.FC<Props> = ({ setIsAuthed }: Props) => {
  const [isRegistered, setIsRegistered] = useState(true)
  const [emailField, resetEmail] = useField('email', 'email')
  const [passwordField, resetPassword] = useField('password', 'password')
  const [nameField, resetName] = useField('text', 'name')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleAuth = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = isRegistered
        ? await loginService.login({
            email: emailField.value,
            password: passwordField.value,
          })
        : await loginService.signUp({
            email: emailField.value,
            password: passwordField.value,
            name: nameField.value,
          })

      if (response?.accessToken) {
        localStorage.setItem('token', response.accessToken)
        console.log('Authenticated user:', response.user)
        setIsAuthed(true)
        navigate('/me')
      } else {
        throw new Error('Invalid response from server')
      }

      resetEmail()
      resetPassword()
      resetName()
    } catch (err) {
      setError('Authentication failed. Please try again.')
      console.error('Auth error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          {isRegistered ? 'Sign in to your account' : 'Create your account'}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleAuth} className="space-y-6">
          {!isRegistered && (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  {...nameField}
                  required={!isRegistered}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                {...emailField}
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900"
              >
                Password
              </label>
              {isRegistered && (
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              )}
            </div>
            <div className="mt-2">
              <input
                {...passwordField}
                required
                autoComplete={
                  isRegistered ? 'current-password' : 'new-password'
                }
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          {error && <p className="text-center text-sm text-red-500">{error}</p>}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-indigo-600 disabled:opacity-50"
            >
              {loading ? 'Processing...' : isRegistered ? 'Sign in' : 'Sign up'}
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          {isRegistered ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            onClick={() => {
              setIsRegistered(!isRegistered)
              resetEmail()
              resetPassword()
              setError(null)
            }}
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            {isRegistered ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </div>
    </div>
  )
}

export default AuthPage
