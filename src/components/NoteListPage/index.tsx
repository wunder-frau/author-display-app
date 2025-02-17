import { useEffect, useState } from 'react'
import { Note } from '../../types'
import NoteItem from './NoteItem'

interface Props {
  notes: Note[]
  onAdd: () => void
}

const NoteListPage: React.FC<Props> = ({ notes: initialNotes, onAdd }) => {
  const [notes, setNotes] = useState(initialNotes)

  useEffect(() => {
    setNotes(initialNotes)
  }, [initialNotes])

  const handleNoteUpdate = (updatedNote: Note) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === updatedNote.id ? updatedNote : note,
      ),
    )
  }

  // Change the parameter type to string
  const handleNoteDelete = (deletedNoteId: string) => {
    setNotes((prevNotes) =>
      prevNotes.filter((note) => note.id !== deletedNoteId),
    )
  }

  return (
    <div className="mt-5 bg-white p-5">
      <div className="flex flex-wrap justify-center gap-4">
        {/* Add Note Card */}
        <div
          onClick={onAdd}
          className="flex w-58 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-4"
        >
          <span className="text-3xl text-gray-400">+</span>
        </div>
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            onUpdate={handleNoteUpdate}
            onDelete={handleNoteDelete}
          />
        ))}
      </div>
    </div>
  )
}

export default NoteListPage
