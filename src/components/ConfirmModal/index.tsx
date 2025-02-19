import { motion } from 'framer-motion'
import React from 'react'
import Button from '../Button/Button'

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
  if (!isOpen) return null

  return (
    <motion.div
      className="bg-opacity-50 fixed inset-0 flex items-center justify-center bg-gray-500/60 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="w-full max-w-sm rounded-lg bg-white p-6 text-center shadow-lg"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
      >
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
      </motion.div>
    </motion.div>
  )
}

export default ConfirmModal
