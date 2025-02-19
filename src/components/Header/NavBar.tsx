import { Bars3Icon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

interface Props {
  navItem: { name: string; href: string }
  isAuthed: boolean
  handleLogout: () => void
  setMobileMenuOpen: (_: boolean) => void
  setAddBookModalOpen: (_: boolean) => void
}

const NavBar: React.FC<Props> = ({
  navItem,
  isAuthed,
  handleLogout,
  setMobileMenuOpen,
  setAddBookModalOpen,
}) => {
  return (
    <nav
      aria-label="Global"
      className="flex items-center justify-between p-6 lg:px-8"
    >
      <div className="flex lg:flex-1">
        <Link to="/" className="-m-1.5 p-1.5">
          <span className="text-4xl">📚</span>
        </Link>
      </div>
      <div className="flex lg:hidden">
        <Button
          onClick={() => setMobileMenuOpen(true)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <Bars3Icon aria-hidden="true" className="h-6 w-6" />
        </Button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {navItem.name === 'Add Book' ? (
          <Button
            onClick={() => setAddBookModalOpen(true)}
            className="inline-block rounded-lg px-4 py-2 text-sm font-semibold text-gray-900 transition-all duration-300 hover:px-5 hover:py-3 hover:shadow-2xl"
          >
            {navItem.name}
          </Button>
        ) : (
          <Link
            to={navItem.href}
            className="inline-block rounded-lg px-4 py-2 text-sm font-semibold text-gray-900 transition-shadow duration-300 hover:shadow-lg"
          >
            {navItem.name}
          </Link>
        )}
      </div>
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
    </nav>
  )
}

export default NavBar
