import { useEffect, useState } from 'react'
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom'

import bookService from './services/books'

import { Book } from './types'

import AuthPage from './components/AuthPage'
import BookListPage from './components/BookListPage'
import BookPage from './components/BookPage'
import Footer from './components/Footer'
import Header from './components/Header'
import StartPage from './components/StartPage'

const App = () => {
  const [books, setBooks] = useState<Book[]>([])
  const [isAuthed, setIsAuthed] = useState<boolean>(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token && typeof token === 'string') {
      setIsAuthed(true)
      bookService.setToken(token)
    } else {
      setIsAuthed(false)
    }
  }, [])

  //FIXME: No pagination
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const books = await bookService.getAll()
        setBooks(books)
      } catch (error) {
        console.error('Error fetching books:', error)
        setBooks([])
      }
    }
    fetchBooks()
  }, [])

  return (
    <Router>
      <Header
        isAuthed={isAuthed}
        setIsAuthed={setIsAuthed}
        books={books}
        setBooks={setBooks}
      />
      <Routes>
        <Route
          path="/"
          element={<Navigate to={isAuthed ? '/me' : '/start'} replace />}
        />
        <Route
          path="/auth"
          element={
            !isAuthed ? (
              <AuthPage setIsAuthed={setIsAuthed} />
            ) : (
              <Navigate to="/me" replace />
            )
          }
        />
        <Route
          path="/book/:id"
          element={<BookPage books={books} setBooks={setBooks} />}
        />
        <Route
          path="/me"
          element={
            isAuthed ? (
              <BookListPage books={books} />
            ) : (
              <Navigate to="/start" replace />
            )
          }
        />
        <Route
          path="/start"
          element={!isAuthed ? <StartPage /> : <Navigate to="/me" replace />}
        />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
