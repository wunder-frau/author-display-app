import { motion } from 'framer-motion'
import { useState } from 'react'

import noteService from '../../services/notes'
import { Id, Note } from '../../types'

import Button from '../Button'
import ConfirmModal from '../Modal/DeleteModal'

interface Props {
  note: Note
  onUpdate: (_: Note) => void
  onDelete: (_: Id) => void
}

const NoteItem = ({ note, onUpdate, onDelete }: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedContent, setEditedContent] = useState(note.content)
  const [loading, setLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleEdit = async () => {
    if (!note.id) {
      console.error('Note ID is missing!')
      return
    }
    try {
      setLoading(true)
      const updatedNote = await noteService.update(note.id, {
        content: editedContent,
      })
      onUpdate(updatedNote)
      setIsEditing(false)
    } catch (error) {
      console.error('Error updating note:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteConfirm = async () => {
    try {
      await noteService.remove(note.id)
      onDelete(note.id)
      setIsModalOpen(false)
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
            <Button
              onClick={handleEdit}
              className="bg-sky-600 text-white"
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save'}
            </Button>
            <Button
              onClick={() => setIsEditing(false)}
              className="bg-gray-400 text-white"
            >
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <div className="w-full">
          <p className="text-center text-sm text-gray-800">{note.content}</p>
          <div className="mt-2 flex justify-center gap-2">
            <Button
              onClick={() => setIsEditing(true)}
              className="rounded bg-sky-600 px-2 py-1 text-sm text-white shadow-md transition-shadow hover:shadow-lg"
            >
              Edit
            </Button>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="px- rounded bg-sky-600 py-1 text-sm text-white shadow-md transition-shadow hover:shadow-lg"
            >
              Delete
            </Button>
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
