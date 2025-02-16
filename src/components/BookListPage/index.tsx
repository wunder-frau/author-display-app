import { Book } from '../../types'
import Item from './Item'

interface Props {
  books: Book[]
}

const BookListPage: React.FC<Props> = ({ books }: Props) => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Book List
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Discover amazing books from various authors.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {books.length > 0 ? (
            books.map((book) => <Item key={book.id} book={book} />)
          ) : (
            <p className="text-gray-600">No books available.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default BookListPage
