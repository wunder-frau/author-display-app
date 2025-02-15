import { Link } from 'react-router-dom'

import { Book } from '../../types'

const BookPreview = ({ book }: { book: Book }) => {
  return (
    <Link to={`/book/${book.id}`} className="no-underline">
      <p className="flex h-full w-full cursor-pointer items-center justify-center rounded border border-[palegoldenrod] bg-[#515174] p-2.5 text-center text-lg text-[greenyellow] duration-300 hover:scale-105 hover:bg-[grey] max-[600px]:text-base">
        {book.title}
      </p>
    </Link>
  )
}

export default BookPreview
