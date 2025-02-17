import { useState } from "react";
import NoteItem from "./NoteItem";

interface Props {
  notes: { id: string; content: string }[];
}

const NoteListPage: React.FC<Props> = ({ notes: initialNotes }: Props) => {
  const [notes, setNotes] = useState(initialNotes);

  const handleNoteUpdate = (updatedNote: { id: string; content: string }) => {
    setNotes(notes.map(note => (note.id === updatedNote.id ? updatedNote : note)));
  };

  return (
    <div className="mt-5 bg-white p-5 border border-gray-300 rounded-lg">
      {notes.length > 0 ? (
        <div className="flex flex-wrap gap-4">
          {notes.map((note) => (
            <NoteItem key={note.id} note={note} onUpdate={handleNoteUpdate} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No notes available.</p>
      )}
    </div>
  );
};

export default NoteListPage;
