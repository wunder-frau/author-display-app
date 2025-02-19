import { Dialog, DialogPanel } from '@headlessui/react'
import Login from './Login'
import MobileMenuHeader from './MobileMenuHeader'
import MobileNav from './MobileNav'

interface Props {
  isOpen: boolean
  onClose: () => void
  navItem: { name: string; href: string }
  isAuthed: boolean
  handleLogout: () => void
  setAddBookModalOpen: (_: boolean) => void
}

const MobileMenu = ({
  isOpen,
  onClose,
  navItem,
  isAuthed,
  handleLogout,
  setAddBookModalOpen,
}: Props) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="lg:hidden">
      <div className="fixed inset-0 z-50" />
      <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <MobileMenuHeader onClose={onClose} />
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <MobileNav
              isAuthed={isAuthed}
              navItem={navItem}
              setAddBookModalOpen={setAddBookModalOpen}
              onClose={onClose}
            />
            <Login isAuthed={isAuthed} handleLogout={handleLogout} />
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  )
}

export default MobileMenu
