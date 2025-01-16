import React, { useState } from 'react';

interface InputProps {
  addTitle: (name: string) => void;
}

const Input: React.FC<InputProps> = ({ addTitle }) => {
  const [authorName, setAuthorName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (authorName.trim()) {
      addTitle(authorName);
      setAuthorName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={authorName}
        onChange={(e) => setAuthorName(e.target.value)}
      />
      <button type="submit">+</button>
    </form>
  );
};

export default Input;
