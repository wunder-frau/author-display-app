import React from 'react'
import { Link } from 'react-router-dom'

import { Book } from '../../types'

interface Props {
  book: Book
}

const Item: React.FC<Props> = ({ book }: Props) => {
  return (
    <Link to={`/book/${book.id}`} className="cursor-pointer">
      <article className="flex max-w-xl flex-col items-start justify-between rounded-lg p-6 transition-shadow duration-300 hover:shadow-lg">
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold text-gray-900 no-underline group-hover:text-gray-600">
            {book.title}
          </h3>
          {book.author && (
            <p className="mt-2 text-sm text-gray-600">
              by {book.author.firstname} {book.author.lastname}
            </p>
          )}
        </div>
      </article>
    </Link>
  )
}

export default Item
