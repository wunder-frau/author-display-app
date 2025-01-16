import React from 'react';

interface TitleListProps {
  titles: string[];
}

const TitleList: React.FC<TitleListProps> = ({ titles }) => {
  return (
    <div className="author-list">
      {titles.map((author, index) => (
        <p key={index}>{author} </p>
      ))}
    </div>
  );
};

export default TitleList;
