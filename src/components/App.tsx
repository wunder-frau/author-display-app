import React, { useState, useEffect } from 'react';
import Input from './Input';
import TitleList from './TitleList';
import booksService from './booksService';
import './styles.css';

interface Book {
  title: string;
}

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);

  const addTitle = (title: string) => {
    const newBook: Book = { title };
    booksService
      .create(newBook)
      .then((response) => {
        setBooks((prevBooks) => [response, ...prevBooks]);
      })
      .catch(() => {
        setError('Failed to add title');
      });
  };

  useEffect(() => {
    booksService
      .getAll()
      .then((response) => {
        setBooks(response);
      })
      .catch(() => {
        setError('Error fetching books');
      });
  }, []);

  return (
    <div className="app-container">
      {error && <p className="error">{error}</p>}
      <Input addTitle={addTitle} />
      <TitleList titles={books.map((book) => book.title)} />
    </div>
  );
};

export default App;
