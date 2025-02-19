import React, { useState } from 'react'
import MobileMenu from '../Header/MobileMenu'
import Logo from '../Logo/ Logo'
import AuthButton from './AuthButton'
import MobileMenuButton from './MobileMenuButton'
import NavButton from './NavButton'

interface Props {
  navItem: { name: string; href: string }
  isAuthed: boolean
  handleLogout: () => void
  setAddBookModalOpen: (_: boolean) => void
}

const NavBar: React.FC<Props> = ({
  navItem,
  isAuthed,
  handleLogout,
  setAddBookModalOpen,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false) // ✅ Initialize state

  return (
    <nav
      aria-label="Global"
      className="flex items-center justify-between p-6 lg:px-8"
    >
      <Logo />
      <MobileMenuButton onClick={() => setMobileMenuOpen(true)} />

      <div className="hidden lg:flex lg:gap-x-12">
        {isAuthed && (
          <NavButton
            navItem={navItem}
            setAddBookModalOpen={setAddBookModalOpen}
          />
        )}
      </div>
      <AuthButton isAuthed={isAuthed} handleLogout={handleLogout} />
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItem={navItem}
        isAuthed={isAuthed}
        handleLogout={handleLogout}
        setAddBookModalOpen={setAddBookModalOpen}
      />
    </nav>
  )
}

export default NavBar
