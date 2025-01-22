import React from 'react';
import { Link } from 'react-router-dom';

interface TitleListProps {
  books: { title: string; id: string }[];
}

const TitleList: React.FC<TitleListProps> = ({ books }) => {
  return (
    <div className="author-list">
      {books.map((book) => (
        <Link to={`/book/${book.id}`} key={book.id} style={{ textDecoration: 'none' }}>
          <p className="clickable-title">{book.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default TitleList;
