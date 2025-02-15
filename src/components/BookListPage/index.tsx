import BookPreview from './BookPreview'

import { Book } from '../../types'

interface Props {
  books: Book[]
}

const BookListPage = ({ books }: Props) => {
  return (
    <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 max-[600px]:grid-cols-1 max-[600px]:gap-2.5">
      {books.map((book) => (
        <BookPreview key={book.id} book={book} />
      ))}
    </div>
  )
}

export default BookListPage
