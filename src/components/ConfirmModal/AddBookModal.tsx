import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'

import { Book } from '../../types'

import AddBookForm from '../AddBookForm'

interface Props {
  isOpen: boolean
  onClose: () => void
  onAdd: (_: Book) => void
}

const AddBookModal: React.FC<Props> = ({ isOpen, onClose, onAdd }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="bg-opacity-50 fixed inset-0 z-50 overflow-y-auto bg-gray-500/30 p-4"
    >
      <div className="flex min-h-screen items-center justify-center">
        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left">
          <div className="mb-4 flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <AddBookForm
            onAdd={(newBook) => {
              onAdd(newBook)
              onClose()
            }}
          />
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default AddBookModal
