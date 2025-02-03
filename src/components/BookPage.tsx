import React from 'react'
import { useParams } from 'react-router-dom'

interface Book {
  title: string
  author?: string
  id: string
}

interface BookPageProps {
  books: Book[]
}

const BookPage: React.FC<BookPageProps> = ({ books }) => {
  const { id } = useParams<{ id: string }>()
  const book = books.find(b => b.id === id)

  if (!book) {
    return (
      <div className='flex h-screen items-center justify-center bg-[#fff5e1]'>
        <p className='text-xl font-semibold text-[#ff6b81]'>Book not found</p>
      </div>
    )
  }
  return (
    <section className='relative flex min-h-screen flex-col items-center justify-center rounded-2xl bg-[#fff5e1] p-6'>
      <p className='absolute top-4 left-4 text-sm font-bold text-[#515174]'>
        {book.author || 'Unknown'}
      </p>

      <p className='absolute top-8 left-4 text-sm text-[#515174]'>
        id: {book.id || 'Unknown'}
      </p>

      <h1 className='text-center text-7xl font-bold text-[#515174]'>
        {book.title}
      </h1>
    </section>
  )
}

export default BookPage
