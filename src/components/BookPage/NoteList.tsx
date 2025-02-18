import { useEffect, useState } from 'react'
import { Id, Note } from '../../types'
import NoteItem from './NoteItem'

interface Props {
  notes: Note[]
  onAdd: () => void
}

const NoteList: React.FC<Props> = ({ notes: initialNotes, onAdd }) => {
  const [notes, setNotes] = useState(initialNotes)

  useEffect(() => {
    setNotes(initialNotes)
  }, [initialNotes])

  const handleNoteUpdate = (updatedObj: Note) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === updatedObj.id ? updatedObj : note)),
    )
  }

  const handleNoteDelete = (id: Id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id))
  }

  return (
    <div className="mt-5 bg-white p-5">
      <div className="flex flex-wrap justify-center gap-4">
        <div
          onClick={onAdd}
          className="flex w-58 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-4"
        >
          <span className="text-3xl text-gray-400">+</span>
        </div>
        {notes.map((note) => (
          <NoteItem
            key={String(note.id)}
            note={note}
            onUpdate={handleNoteUpdate}
            onDelete={handleNoteDelete}
          />
        ))}
      </div>
    </div>
  )
}

export default NoteList
