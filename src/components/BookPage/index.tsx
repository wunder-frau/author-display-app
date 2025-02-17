import { useParams } from 'react-router-dom'
import { Book } from '../../types'
import NotesContainer from '../NoteListPage/NotesContainer'

interface Props {
  books: Book[]
}

const BookPage: React.FC<Props> = ({ books }: Props) => {
  const { id } = useParams<{ id: string }>()
  const book = books.find((b) => b.id === Number(id))

  if (!book) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#fff5e1]">
        <p className="text-xl font-semibold text-[#ff6b81]">Book not found</p>
      </div>
    )
  }

  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto mb-8 max-w-2xl px-4 sm:px-6 md:px-10 lg:mx-0">
        <h1 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-7xl">
          {book.title}
        </h1>
        {book.author && (
          <p className="mt-2 text-lg text-gray-600">
            by {book.author.firstname} {book.author.lastname}
          </p>
        )}
      </div>
      <NotesContainer bookId={id!} />
    </div>
  )
}

export default BookPage
