import React from 'react'
import { Link } from 'react-router-dom'

interface TitleListProps {
  books: { title: string; author?: string; id: string }[]
}

const TitleList: React.FC<TitleListProps> = ({ books }) => {
  return (
    <div className='mt-5 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 max-[600px]:grid-cols-1 max-[600px]:gap-2.5'>
      {books.map(book => (
        <Link to={`/book/${book.id}`} key={book.id} className='no-underline'>
          <p className='flex h-full w-full cursor-pointer items-center justify-center rounded border border-[palegoldenrod] bg-[#515174] p-2.5 text-center text-lg text-[greenyellow] duration-300 hover:scale-105 hover:bg-[grey] max-[600px]:text-base'>
            {book.title}
          </p>
        </Link>
      ))}
    </div>
  )
}

export default TitleList
