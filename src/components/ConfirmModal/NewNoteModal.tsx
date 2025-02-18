import { motion } from 'framer-motion'
import React, { useState } from 'react'

interface Props {
  isOpen: boolean
  onClose: () => void
  onSubmit: (_: string) => void
}

const NewNoteModal: React.FC<Props> = ({ isOpen, onClose, onSubmit }) => {
  const [noteContent, setNoteContent] = useState('')

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
        <h2 className="text-lg font-semibold">Add New Note</h2>
        <textarea
          className="mt-3 w-full rounded border p-2"
          rows={3}
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          placeholder="Type your note here..."
        />
        <div className="mt-4 flex justify-center gap-4">
          <button
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            onClick={() => {
              if (noteContent.trim()) {
                onSubmit(noteContent)
                setNoteContent('')
              }
            }}
          >
            Add Note
          </button>
          <button
            className="rounded bg-gray-300 px-4 py-2 text-black hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default NewNoteModal
