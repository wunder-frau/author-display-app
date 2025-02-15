import { Link } from 'react-router-dom'

import { Book } from '../../types'

const BookListItem = ({ book }: { book: Book }) => {
  return (
    <article
      key={book.id}
      className="flex max-w-xl flex-col items-start justify-between"
    >
      <div className="group relative">
        <Link to={`/book/${book.id}`}>
          <h3 className="mt-3 text-lg font-semibold text-gray-900 no-underline group-hover:text-gray-600">
            {book.title}
          </h3>
        </Link>
        {book.author && (
          <p className="mt-2 text-sm text-gray-600">by {book.author}</p>
        )}
      </div>
    </article>
  )
}

export default BookListItem
