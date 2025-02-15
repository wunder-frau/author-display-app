import { useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import BookListPage from './components/BookListPage'
import BookPage from './components/BookPage'
import { apiBaseUrl } from './constants'
import { useResource } from './hooks'
import { Book, NewBook } from './types'

const App = () => {
  const [books, bookService] = useResource<Book, NewBook>(`${apiBaseUrl}/books`)

  useEffect(() => {
    bookService.getAll()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookListPage books={books} />} />
        <Route path="/book/:id" element={<BookPage books={books} />} />
      </Routes>
    </Router>
  )
}

export default App
