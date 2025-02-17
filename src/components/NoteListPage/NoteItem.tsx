import { useState } from "react";
import { motion } from "framer-motion"; // ✅ Import animation library
import notesService from "../../services/notes";

interface Props {
  note: { id: string; content: string };
  onUpdate: (updatedNote: { id: string; content: string }) => void;
  onDelete: (deletedNoteId: string) => void;
}

const NoteItem: React.FC<Props> = ({ note, onUpdate, onDelete }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(note.content);
  const [loading, setLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // ✅ Handle Editing
  const handleEdit = async () => {
    if (!note.id) {
      console.error("Note ID is missing!");
      return;
    }
    try {
      setLoading(true);
      const updatedNote = await notesService.update(note.id, editedContent);
      onUpdate(updatedNote);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating note:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Handle Deletion with Animation
  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await notesService.remove(note.id);
      onDelete(note.id); // Remove from UI
    } catch (error) {
      console.error("Error deleting note:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <motion.div
      className="p-4 border border-amber-700 rounded-md shadow-sm bg-white w-60"
      initial={{ opacity: 0, scale: 0.9 }}  // ✅ Appear effect
      animate={{ opacity: 1, scale: 1 }}    // ✅ Show effect
      exit={{ opacity: 0, scale: 0.5 }}     // ✅ Disappear animation on delete
      transition={{ duration: 0.3 }}
    >
      {isEditing ? (
        <div>
          <textarea
            className="w-full p-2 border rounded"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <div className="mt-2 flex gap-2">
            <button
              className="px-3 py-1 text-sm bg-blue-500 text-white rounded"
              onClick={handleEdit}
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
            <button
              className="px-3 py-1 text-sm bg-gray-400 text-white rounded"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-gray-800 text-sm">{note.content}</p>
          <div className="mt-2 flex gap-2">
            <button
              className="px-2 py-1 text-sm bg-yellow-500 text-white rounded"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="px-2 py-1 text-sm bg-red-500 text-white rounded"
              onClick={handleDelete}
              disabled={isDeleting}
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default NoteItem;
