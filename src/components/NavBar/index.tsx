import React from 'react'

import Logo from './ Logo'
import AuthButton from './AuthButton'
import MobileMenuButton from './MobileMenuButton'
import NavButton from './NavButton'

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
      <Logo />
      <MobileMenuButton onClick={() => setMobileMenuOpen(true)} />
      <div className="hidden lg:flex lg:gap-x-12">
        <NavButton
          navItem={navItem}
          setAddBookModalOpen={setAddBookModalOpen}
        />
      </div>
      <AuthButton isAuthed={isAuthed} handleLogout={handleLogout} />
    </nav>
  )
}

export default NavBar
