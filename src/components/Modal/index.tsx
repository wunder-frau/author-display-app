import { XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import React, { useEffect } from 'react'

import Button from '../Button'

interface Props {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  showCloseButton?: boolean
}

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  showCloseButton = true,
}: Props) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])
  if (!isOpen) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500/60 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative z-50 w-full max-w-sm rounded-lg bg-white p-6 text-center shadow-lg"
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
