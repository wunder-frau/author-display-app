import { XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import React from 'react'
import Button from '../Button/Button'

interface Props {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  showCloseButton?: boolean
}

const Modal: React.FC<Props> = ({
  isOpen,
  onClose,
  title,
  children,
  showCloseButton = true,
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
        <div className="mb-4 flex justify-between">
          {title && <h2 className="text-lg font-semibold">{title}</h2>}
          {showCloseButton && (
            <Button
              onClick={onClose}
              className="rounded-full p-1 text-gray-400 hover:text-gray-600"
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </Button>
          )}
        </div>
        {children}
      </motion.div>
    </motion.div>
  )
}

export default Modal
