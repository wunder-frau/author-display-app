import { motion } from 'framer-motion'
import { useState } from 'react'
import notesService from '../../services/notes'
import ConfirmModal from '../ConfirmModal/ConfirmModal'

interface Props {
  note: { id: string; content: string }
  onUpdate: (updatedNote: { id: string; content: string }) => void
  onDelete: (deletedNoteId: string) => void
}

const NoteItem: React.FC<Props> = ({ note, onUpdate, onDelete }: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedContent, setEditedContent] = useState(note.content)
  const [loading, setLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Handle Editing
  const handleEdit = async () => {
    if (!note.id) {
      console.error('Note ID is missing!')
      return
    }
    try {
      setLoading(true)
      const updatedNote = await notesService.update(note.id, editedContent)
      onUpdate(updatedNote)
      setIsEditing(false)
    } catch (error) {
      console.error('Error updating note:', error)
    } finally {
      setLoading(false)
    }
  }

  // Handle Delete Confirmation
  const handleDeleteConfirm = async () => {
    try {
      await notesService.remove(note.id)
      onDelete(note.id)
      setIsModalOpen(false) // Close modal after deletion
    } catch (error) {
      console.error('Error deleting note:', error)
    }
  }

  return (
    <motion.div
      className="flex w-full flex-col items-center justify-center rounded-lg border-2 border-gray-300 bg-white p-4 shadow-sm transition-shadow hover:shadow-lg sm:w-[14.5rem] md:w-[15rem]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3 }}
    >
      {isEditing ? (
        <div className="w-full">
          <textarea
            className="w-full rounded border p-2"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <div className="mt-2 flex justify-center gap-2">
            <button
              className="rounded bg-sky-600 px-3 py-1 text-sm text-white shadow-md transition-shadow hover:shadow-lg"
              onClick={handleEdit}
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save'}
            </button>
            <button
              className="rounded bg-sky-600 px-3 py-1 text-sm text-white shadow-md transition-shadow hover:shadow-lg"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full">
          <p className="text-center text-sm text-gray-800">{note.content}</p>
          <div className="mt-2 flex justify-center gap-2">
            <button
              className="rounded bg-sky-600 px-2 py-1 text-sm text-white shadow-md transition-shadow hover:shadow-lg"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="rounded bg-sky-600 px-2 py-1 text-sm text-white shadow-md transition-shadow hover:shadow-lg"
              onClick={() => setIsModalOpen(true)}
            >
              Delete
            </button>
          </div>
        </div>
      )}

      <ConfirmModal
        message="Are you sure you want to delete this note?"
        isOpen={isModalOpen}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setIsModalOpen(false)}
      />
    </motion.div>
  )
}

export default NoteItem
