import React, { useState } from 'react';
import Input from './Input';
import TitleList from './TitleList';
import './styles.css';

const App: React.FC = () => {
  const [books, setBooks] = useState<string[]>([
    "To Kill a Mockingbird",
    "Pride and Prejudice",
    "1984",
    "The Great Gatsby",
    "Moby Dick",
    "War and Peace",
    "The Catcher in the Rye",
    "Jane Eyre",
    "The Hobbit",
    "Brave New World",
    "The Lord of the Rings",
    "Harry Potter and the Sorcerer's Stone",
    "The Chronicles of Narnia",
    "Anna Karenina",
    "Crime and Punishment",
    "Wuthering Heights",
    "Great Expectations",
    "Little Women",
    "Emma",
    "Sense and Sensibility",
    "The Grapes of Wrath",
    "Of Mice and Men",
    "A Tale of Two Cities",
    "The Scarlet Letter",
    "Dracula",
    "Frankenstein",
    "The Picture of Dorian Gray",
    "Heart of Darkness",
    "The Divine Comedy",
    "Don Quixote",
    "The Iliad",
    "The Odyssey",
    "Les Misérables",
    "The Brothers Karamazov",
    "Madame Bovary",
    "Fahrenheit 451",
    "Slaughterhouse-Five",
    "One Hundred Years of Solitude",
    "The Sound and the Fury",
    "Beloved",
    "Gone with the Wind",
    "Catch-22",
    "The Sun Also Rises",
    "The Road",
    "Life of Pi",
    "The Alchemist",
    "Invisible Man",
    "The Kite Runner",
    "A Thousand Splendid Suns",
    "The Hunger Games"
  ]);

  const addTitle = (title: string) => {
    setBooks((prevBooks) => [title, ...prevBooks]);
  };

  return (
    <div className="app-container">
      <Input addTitle={addTitle} />
      <TitleList titles={books} />
    </div>
  );
};

export default App;
