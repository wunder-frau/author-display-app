import Button from '../Button'

interface Props {
  isRegistered: boolean
  setIsRegistered: (_: boolean) => void
  resetForm: () => void
  setError: (_: string | null) => void
}

const AuthToggle = ({
  isRegistered,
  setIsRegistered,
  resetForm,
  setError,
}: Props) => (
  <p className="mt-6 text-center text-sm text-gray-500">
    {isRegistered ? "Don't have an account?" : 'Already have an account?'}{' '}
    <Button
      onClick={() => {
        setIsRegistered(!isRegistered)
        resetForm()
        setError(null)
      }}
      className="font-semibold text-indigo-600 hover:text-indigo-500"
    >
      {isRegistered ? 'Sign up' : 'Sign in'}
    </Button>
  </p>
)

export default AuthToggle
