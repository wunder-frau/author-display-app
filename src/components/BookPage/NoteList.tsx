import React from 'react'
import { Id, Note } from '../../types'
import AddButton from '../Button/AddButton'
import NoteItem from './NoteItem'

interface Props {
  notes: Note[]
  setNotes: (_: Note[]) => void
  onAdd: React.MouseEventHandler<HTMLDivElement>
}

const NoteList: React.FC<Props> = ({ notes, setNotes, onAdd }) => {
  const handleNoteUpdate = (updatedObj: Note) => {
    setNotes(
      notes.map((note: Note) =>
        note.id === updatedObj.id ? updatedObj : note,
      ),
    )
  }

  const handleNoteDelete = (id: Id) => {
    setNotes(notes.filter((note: Note) => note.id !== id))
  }

  return (
    <div className="mt-5 bg-white p-5">
      <div className="flex flex-wrap justify-center gap-4">
        <AddButton onClick={onAdd} />
        {notes.map((note: Note) => (
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
