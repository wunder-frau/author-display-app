import { motion } from 'framer-motion'

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
      className="bg-opacity-50 fixed inset-0 flex items-center justify-center bg-amber-200"
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
          <button
            className="rounded bg-red-400 px-4 py-2 text-white hover:bg-red-600"
            onClick={onConfirm}
          >
            Yes, Delete
          </button>
          <button
            className="rounded bg-gray-300 px-4 py-2 text-black hover:bg-gray-400"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ConfirmModal
