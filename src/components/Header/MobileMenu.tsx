import { Dialog, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

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
        <div className="flex items-center justify-between">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="text-4xl">📚</span>
          </Link>
          <Button
            onClick={onClose}
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
          >
            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
          </Button>
        </div>

        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
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
            </div>

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
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  )
}

export default MobileMenu
