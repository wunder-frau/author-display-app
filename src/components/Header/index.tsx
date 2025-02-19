import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Book } from '../../types'

import AddBookModal from '../Modal/AddBookModal'
import MobileMenu from './MobileMenu'
import NavBar from './NavBar'

interface Props {
  isAuthed: boolean
  setIsAuthed: (_: boolean) => void
  books: Book[]
  setBooks: (_: Book[]) => void
}

const Header: React.FC<Props> = ({
  isAuthed,
  setIsAuthed,
  books,
  setBooks,
}) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [addBookModalOpen, setAddBookModalOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    setIsAuthed(false)
    navigate('/start')
  }

  const navItem = location.pathname.startsWith('/book')
    ? { name: 'Back to Book List', href: '/me' }
    : { name: 'Add Book', href: '#' }

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <NavBar
          navItem={navItem}
          isAuthed={isAuthed}
          handleLogout={handleLogout}
          setMobileMenuOpen={setMobileMenuOpen}
          setAddBookModalOpen={setAddBookModalOpen}
        />
        <MobileMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          navItem={navItem}
          isAuthed={isAuthed}
          handleLogout={handleLogout}
          setAddBookModalOpen={setAddBookModalOpen}
        />
        <AddBookModal
          isOpen={addBookModalOpen}
          onClose={() => setAddBookModalOpen(false)}
          onAdd={(newBook) => setBooks([...books, newBook])}
        />
      </header>
    </div>
  )
}

export default Header
