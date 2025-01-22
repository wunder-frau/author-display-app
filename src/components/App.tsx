import React, { useState, useEffect } from 'react';
import Input from './Input';
import TitleList from './TitleList';
import booksService from './booksService';
import './styles.css';

interface Book {
  title: string;
  id: string;
}

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);
  const setSortedBooks = (newBooks: Book[]) => {
    setBooks(newBooks.sort((a, b) => Number(b.id) - Number(a.id)));
  };
  const generateId = () => {
    const numericIds = books
      .map((n) => Number(n.id))
      .filter((id) => !isNaN(id));
    const maxId = numericIds.length > 0 ? Math.max(...numericIds) : 0;
    return String(maxId + 1);
  };

  useEffect(() => {
    booksService
      .getAll()
      .then((response) => {
        setSortedBooks(response);
      })
      .catch(() => {
        setError('Error fetching books');
      });
  }, []);
  
  const addTitle = (title: string) => {
    const newBook: Book = { title, id: generateId() };
    booksService
      .create(newBook)
      .then((response) => {
        setSortedBooks([response, ...books]);
      })
      .catch(() => {
        setError('Failed to add title');
      });
  };

  return (
    <div className="app-container">
      {error && <p className="error">{error}</p>}
      <Input addTitle={addTitle} />
      <TitleList titles={books.map((book) => book.title)} />
    </div>
  );
};

export default App;