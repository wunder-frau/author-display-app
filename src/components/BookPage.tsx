import React from 'react';
import { useParams } from 'react-router-dom';

interface Book {
  title: string;
  id: string;
}

interface BookPageProps {
  books: Book[];
}

const BookPage: React.FC<BookPageProps> = ({ books }) => {
  const { id } = useParams<{ id: string }>();
  const book = books.find((b) => b.id === id);

  if (!book) {
    return <p>Book not found</p>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p>ID: {book.id}</p>
    </div>
  );
};

export default BookPage;
