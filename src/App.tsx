import { useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import BookListPage from './components/BookListPage'
import BookPage from './components/BookPage'
import Footer from './components/Footer'
import Header from './components/Header'
import { apiBaseUrl } from './constants'
import { useResource } from './hooks'
import { Book, NewBook } from './types'

//TODO: User authentication
const App = () => {
  const [books, bookService] = useResource<Book, NewBook>(`${apiBaseUrl}/books`)

  useEffect(() => {
    bookService.getAll()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<BookListPage books={books} />} />
        <Route path="/book/:id" element={<BookPage books={books} />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
