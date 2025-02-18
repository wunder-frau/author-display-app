import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import booksService from '../../services/books'
import { Book } from '../../types'

import ConfirmModal from '../ConfirmModal/ConfirmModal'
import NotesContainer from './NotesContainer'

interface Props {
  books: Book[]
  setBooks: (books: Book[]) => void
}

const BookPage: React.FC<Props> = ({ books, setBooks }: Props) => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [confirmOpen, setConfirmOpen] = useState(false)
  const book = books.find((b) => b.id === Number(id))

  if (!book) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#fff5e1]">
        <p className="text-xl font-semibold text-[#ff6b81]">Book not found</p>
      </div>
    )
  }

  const handleDelete = async () => {
    try {
      await booksService.remove(book.id)
      setBooks(books.filter((book) => book.id !== Number(id)))
      navigate('/me')
    } catch (error) {
      console.error('Error deleting book:', error)
    }
  }

  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto mb-8 max-w-2xl px-4 text-center sm:px-6 md:px-10">
        <h1 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-7xl">
          {book.title}
        </h1>
        {book.author && (
          <p className="mt-2 text-lg text-gray-600">
            by {book.author.firstname} {book.author.lastname}
          </p>
        )}
        <button
          onClick={() => setConfirmOpen(true)}
          className="mt-4 rounded bg-fuchsia-200 px-4 py-2 text-white transition-colors hover:bg-red-600"
        >
          Delete Book
        </button>
      </div>
      <NotesContainer bookId={id!} />

      <ConfirmModal
        message="Are you sure you want to delete this book?"
        isOpen={confirmOpen}
        onConfirm={handleDelete}
        onCancel={() => setConfirmOpen(false)}
      />
    </div>
  )
}

export default BookPage
