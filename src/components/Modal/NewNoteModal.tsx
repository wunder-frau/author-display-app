import { useState } from 'react'
import Button from '../Button/Button'
import Modal from './index'

interface Props {
  isOpen: boolean
  onClose: () => void
  onSubmit: (_: string) => void
}

const NewNoteModal = ({ isOpen, onClose, onSubmit }: Props) => {
  const [noteContent, setNoteContent] = useState('')

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Note">
      <textarea
        className="mt-3 w-full rounded border p-2"
        rows={3}
        value={noteContent}
        onChange={(e) => setNoteContent(e.target.value)}
        placeholder="Type your note here..."
      />
      <div className="mt-4 flex justify-center gap-4">
        <Button
          onClick={() => {
            if (noteContent.trim()) {
              onSubmit(noteContent)
              setNoteContent('')
            }
          }}
          className="bg-blue-500 text-white hover:bg-blue-600"
        >
          Add Note
        </Button>
        <Button
          onClick={onClose}
          className="bg-gray-300 text-black hover:bg-gray-400"
        >
          Cancel
        </Button>
      </div>
    </Modal>
  )
}

export default NewNoteModal
