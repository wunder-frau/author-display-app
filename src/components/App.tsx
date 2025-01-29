import React, { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import '../index.css'
import BookPage from './BookPage'
import Input from './Input'
import TitleList from './TitleList'
import booksService from './booksService'
import './styles.css'

interface Book {
  title: string
  author?: string
  id: string
}

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([])
  const [error, setError] = useState<string | null>(null)
  const setSortedBooks = (newBooks: Book[]) => {
    setBooks(newBooks.sort((a, b) => Number(b.id) - Number(a.id)))
  }
  const generateId = () => {
    const numericIds = books.map(n => Number(n.id)).filter(id => !isNaN(id))
    const maxId = numericIds.length > 0 ? Math.max(...numericIds) : 0
    return String(maxId + 1)
  }

  useEffect(() => {
    booksService
      .getAll()
      .then(response => {
        setSortedBooks(response)
      })
      .catch(() => {
        setError('Error fetching books')
      })
  }, [])

  const addTitle = (title: string, author: string) => {
    const newBook = { title, author, id: generateId() }
    booksService
      .create(newBook)
      .then(response => {
        setSortedBooks([response, ...books])
      })
      .catch(() => {
        setError('Failed to add book')
      })
  }

  return (
    <Router>
      {/* <div className="app-container"> */}
      <div className='mx-auto grid max-w-screen-xl grid-rows-3 gap-5 rounded-lg border-4 border-pink-500 bg-gray-700 p-12 text-center font-sans'>
        <h2 className='=test-2xl animate-[var(--animate-shineImpulse)] text-blue-500'>Hello, World!</h2>
        {error && <p className='error'>{error}</p>}
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Input addTitle={addTitle} />
                <TitleList books={books} />
              </>
            }
          />
          <Route path='/book/:id' element={<BookPage books={books} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
