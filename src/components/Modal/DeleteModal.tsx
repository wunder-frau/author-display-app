import React from 'react'
import Button from '../Button/Button'
import Modal from './index'

interface Props {
  message: string
  isOpen: boolean
  onConfirm: () => void
  onCancel: () => void
}

const ConfirmModal: React.FC<Props> = ({
  message,
  isOpen,
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onCancel} showCloseButton={false}>
      <p className="text-lg font-semibold">{message}</p>
      <div className="mt-4 flex justify-center gap-4">
        <Button
          onClick={onConfirm}
          className="bg-red-400 text-white hover:bg-red-600"
        >
          Yes, Delete
        </Button>
        <Button
          onClick={onCancel}
          className="bg-gray-300 text-black hover:bg-gray-400"
        >
          Cancel
        </Button>
      </div>
    </Modal>
  )
}

export default ConfirmModal
