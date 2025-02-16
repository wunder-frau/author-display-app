import { useEffect, useState } from 'react'
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom'

import AuthPage from './components/AuthPage'
import BookListPage from './components/BookListPage'
import BookPage from './components/BookPage'
import Footer from './components/Footer'
import Header from './components/Header'
import StartPage from './components/StartPage'
import { apiBaseUrl } from './constants'
import { useResource } from './hooks'
import { Book, NewBook } from './types'

const App = () => {
  const [books, bookService] = useResource<Book, NewBook>(`${apiBaseUrl}/books`)
  const [isAuthed, setIsAuthed] = useState<boolean>(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsAuthed(Boolean(token))

    bookService.getAll()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Router>
      <Header isAuthed={isAuthed} setIsAuthed={setIsAuthed} />
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
        <Route path="/book/:id" element={<BookPage books={books} />} />
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
