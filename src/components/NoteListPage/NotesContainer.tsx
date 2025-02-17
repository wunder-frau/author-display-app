import { useCallback, useEffect, useState } from 'react'
import notesService from '../../services/notes'
import { Note } from '../../types'
import NewNoteModal from '../ConfirmModal/NewNoteModal'
import NoteListPage from './index'

interface NotesContainerProps {
  bookId: string
}

const NotesContainer: React.FC<NotesContainerProps> = ({ bookId }) => {
  const [notes, setNotes] = useState<Note[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Fetch notes for the given book
  const fetchNotes = useCallback(async () => {
    try {
      const token = localStorage.getItem('token')
      notesService.setToken(token)
      const fetchedNotes = await notesService.getAllByBook(bookId)
      console.log('Fetched notes:', fetchedNotes)

      // Sort notes so that the note with the highest numeric id appears first.
      // This assumes that note.id is a numeric string.
      const sortedNotes = fetchedNotes.sort(
        (a, b) => Number(b.id) - Number(a.id),
      )
      setNotes(sortedNotes)
    } catch (error) {
      console.error('Error fetching notes:', error)
      setNotes([])
    } finally {
      setLoading(false)
    }
  }, [bookId])

  // Load notes when component mounts or bookId changes
  useEffect(() => {
    fetchNotes()
  }, [fetchNotes])

  // Handle adding a new note
  const handleAddNote = useCallback(
    async (content: string) => {
      try {
        const newNote = await notesService.create(bookId, content)
        console.log('New note added:', newNote)

        if (!newNote.id) {
          console.error('New note is missing an ID!', newNote)
          return
        }

        // Prepend the new note so it appears at the top immediately
        setNotes((prevNotes) => [newNote, ...prevNotes])
        setIsModalOpen(false)
      } catch (error) {
        console.error('Error creating note:', error)
      }
    },
    [bookId],
  )

  if (loading) {
    return <p className="py-8 text-center">Loading notes...</p>
  }

  return (
    <div className="mx-4 my-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16">
      <NoteListPage notes={notes} onAdd={() => setIsModalOpen(true)} />

      <NewNoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddNote}
      />
    </div>
  )
}

export default NotesContainer
