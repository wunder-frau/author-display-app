import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

interface Props {
  isAuthed: boolean
  setIsAuthed: (isAuthed: boolean) => void
}

const Header: React.FC<Props> = ({ isAuthed, setIsAuthed }: Props) => {
  const navigate = useNavigate()
  const location = useLocation()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsAuthed(false)
    navigate('/start')
  }

  // Determine navigation button based on current route:
  // If the path starts with '/book' (e.g. /book/2), show "Back to Book List"
  // If the path starts with '/me', show "Add Book"
  // Default to "Add Book"
  const navItem = location.pathname.startsWith('/book')
    ? { name: 'Back to Book List', href: '/me' }
    : { name: 'Add Book', href: '/add-book' }

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
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
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link
              to={navItem.href}
              className="text-sm/6 font-semibold text-gray-900"
            >
              {navItem.name}
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {isAuthed ? (
              <button
                onClick={handleLogout}
                className="text-sm/6 font-semibold text-gray-900"
              >
                Log out <span aria-hidden="true">&rarr;</span>
              </button>
            ) : (
              <Link
                to="/auth"
                className="text-sm/6 font-semibold text-gray-900"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </Link>
            )}
          </div>
        </nav>

        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="text-4xl">📚</span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    to={navItem.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {navItem.name}
                  </Link>
                </div>
                <div className="py-6">
                  {isAuthed ? (
                    <button
                      onClick={handleLogout}
                      className="-mx-3 block w-full rounded-lg px-3 py-2.5 text-left text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Log out
                    </button>
                  ) : (
                    <Link
                      to="/auth"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  )
}

export default Header
