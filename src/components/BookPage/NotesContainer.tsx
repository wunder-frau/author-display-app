import { useCallback, useEffect, useState } from 'react'
import notesService from '../../services/notes'
import { Id, Note } from '../../types'
import NewNoteModal from '../Modal/NewNoteModal'
import NoteList from './NoteList'

interface Props {
  bookId: Id
}

const NotesContainer = ({ bookId }: Props) => {
  const [notes, setNotes] = useState<Note[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const token = localStorage.getItem('token')
        notesService.setToken(token)
        const notes = await notesService.getAllByBook(bookId)
        setNotes(notes)
      } catch (error) {
        console.error('Error fetching notes:', error)
        setNotes([])
      } finally {
        setLoading(false)
      }
    }
    fetchNotes()
  }, [bookId])

  const handleAddNote = useCallback(
    async (content: string) => {
      try {
        const newNote = await notesService.create(bookId, content)

        setNotes([newNote, ...notes])
        setIsModalOpen(false)
      } catch (error) {
        console.error('Error creating note:', error)
      }
    },
    [bookId, notes],
  )

  if (loading) {
    return <p className="py-8 text-center">Loading notes...</p>
  }

  return (
    <div className="mx-4 my-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16">
      <NoteList
        notes={notes}
        setNotes={setNotes}
        onAdd={() => setIsModalOpen(true)}
      />

      <NewNoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddNote}
      />
    </div>
  )
}

export default NotesContainer
