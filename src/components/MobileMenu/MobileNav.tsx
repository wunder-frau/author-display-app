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
          className="rounded-lgpx-3 -mx-3 block w-full py-2.5 text-left text-base font-semibold text-gray-900 hover:bg-gray-50"
        >
          {navItem.name}
        </Button>
      )}
    </div>
  )
}

export default MobileNav
