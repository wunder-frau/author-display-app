import { useParams } from 'react-router-dom'
import { Book } from '../../types'

interface Props {
  books: Book[]
}

//TODO: Add a book note
//TODO: Edit a book notes
const BookPage = ({ books }: Props) => {
  const { id } = useParams<{ id: string }>()
  const book = books.find((b) => b.id === id)

  //FIXME: No routes matched location "/books/:id"
  if (!book) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#fff5e1]">
        <p className="text-xl font-semibold text-[#ff6b81]">Book not found</p>
      </div>
    )
  }

  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          {book.title}
        </h1>
        {book.author && (
          <p className="mt-2 text-lg text-gray-600">by {book.author}</p>
        )}
      </div>
    </div>
  )
}

export default BookPage
