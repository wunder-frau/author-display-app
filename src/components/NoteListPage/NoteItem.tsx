import { useState } from "react";
import notesService from "../../services/notes";

interface Props {
  note: { id: string; content: string };
  onUpdate: (updatedNote: { id: string; content: string }) => void;
}

const NoteItem: React.FC<Props> = ({ note, onUpdate }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(note.content);
  const [loading, setLoading] = useState(false);

  const handleEdit = async () => {
    try {
      setLoading(true);
      const updatedNote = await notesService.update(note.id, editedContent);
      onUpdate(updatedNote); // Update parent component state
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating note:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border border-amber-700 rounded-md shadow-sm bg-white w-60">
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
          <button
            className="mt-2 px-2 py-1 text-sm bg-yellow-500 text-white rounded"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default NoteItem;
