import { Link } from 'react-router-dom'
import Button from '../Button/Button'

interface Props {
  isAuthed: boolean
  handleLogout: () => void
}

const Login = ({ isAuthed, handleLogout }: Props) => {
  return (
    <div className="py-6">
      {isAuthed ? (
        <Button
          onClick={handleLogout}
          className="-mx-3 block w-full rounded-lg px-3 py-2.5 text-left text-base font-semibold text-gray-900 hover:bg-gray-50"
        >
          Log out
        </Button>
      ) : (
        <Link
          to="/auth"
          className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
        >
          Log in
        </Link>
      )}
    </div>
  )
}

export default Login
