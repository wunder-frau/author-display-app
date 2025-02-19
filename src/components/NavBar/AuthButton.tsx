import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

interface Props {
  isAuthed: boolean
  handleLogout: () => void
}

const AuthButton: React.FC<Props> = ({ isAuthed, handleLogout }) => (
  <div className="hidden lg:flex lg:flex-1 lg:justify-end">
    {isAuthed ? (
      <Button
        onClick={handleLogout}
        className="text-sm font-semibold text-gray-900"
      >
        Log out <span aria-hidden="true">&rarr;</span>
      </Button>
    ) : (
      <Link to="/auth" className="text-sm font-semibold text-gray-900">
        Log in <span aria-hidden="true">&rarr;</span>
      </Link>
    )}
  </div>
)

export default AuthButton
