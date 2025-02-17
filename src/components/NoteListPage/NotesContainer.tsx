import { useEffect, useState } from "react";
import notesService from "../../services/notes"
import NoteListPage from "./index";

const NotesContainer: React.FC<{ bookId: string }> = ({ bookId }) => {
  const [notes, setNotes] = useState<{ content: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const token = localStorage.getItem("token");
        notesService.setToken(token);
        const fetchedNotes = await notesService.getAllByBook(bookId);
        setNotes(fetchedNotes);
      } catch (error) {
        console.error("Error fetching notes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, [bookId]);

  if (loading) {
    return <p>Loading notes...</p>;
  }

  return <NoteListPage notes={notes} />;
};

export default NotesContainer;
