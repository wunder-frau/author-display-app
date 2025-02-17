import { Link } from 'react-router-dom'

import { Book } from '../../types'

interface Props {
  book: Book
}

const Item: React.FC<Props> = ({ book }: Props) => {
  return (
    <article className="flex max-w-xl flex-col items-start justify-between border-2 border-amber-700">
      <div className="group relative">
        <Link to={`/book/${book.id}`}>
          <h3 className="mt-3 text-lg font-semibold text-gray-900 no-underline group-hover:text-gray-600">
            {book.title}
          </h3>
        </Link>
        {book.author && (
          <p className="mt-2 text-sm text-gray-600">
            by {book.author.firstname} {book.author.lastname}
          </p>
        )}
      </div>
    </article>
  )
}

export default Item
