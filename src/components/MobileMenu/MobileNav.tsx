import { Link } from 'react-router-dom'
import Button from '../Button/Button'

interface Props {
  isAuthed: boolean
  navItem: { name: string; href: string }
  setAddBookModalOpen: (_: boolean) => void
  onClose: () => void
}

const MobileNav = ({
  isAuthed,
  navItem,
  setAddBookModalOpen,
  onClose,
}: Props) => {
  return (
    <div className="space-y-2 py-6">
      {isAuthed && navItem.name === 'Add Book' && (
        <Button
          onClick={() => {
            setAddBookModalOpen(true)
            onClose()
          }}
          className="-mx-3 block w-full rounded-lg bg-emerald-300 px-3 py-2.5 text-left text-base font-semibold text-gray-900 hover:bg-gray-50"
        >
          {navItem.name}
        </Button>
      )}

      <Link
        to={navItem.href}
        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 transition-shadow duration-300 hover:bg-gray-50 hover:shadow-lg"
      >
        {navItem.name}
      </Link>
    </div>
  )
}

export default MobileNav
