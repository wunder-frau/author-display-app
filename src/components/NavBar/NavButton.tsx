import { Link } from 'react-router-dom'
import Button from '../Button/Button'

interface Props {
  navItem: { name: string; href: string }
  setAddBookModalOpen: (_: boolean) => void
}

const NavButton = ({ navItem, setAddBookModalOpen }: Props) => {
  return navItem.name === 'Add Book' ? (
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
  )
}

export default NavButton
