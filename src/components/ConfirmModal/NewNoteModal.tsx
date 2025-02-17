import { useState } from "react";
import { motion } from "framer-motion";

interface NewNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (content: string) => void;
}



const NewNoteModal: React.FC<NewNoteModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [noteContent, setNoteContent] = useState("");

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-amber-200 bg-opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
      >
        <h2 className="text-lg font-semibold">Add New Note</h2>
        <textarea
          className="w-full p-2 mt-3 border rounded"
          rows={3}
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          placeholder="Type your note here..."
        />
        <div className="mt-4 flex justify-center gap-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => {
              if (noteContent.trim()) {
                onSubmit(noteContent);
                setNoteContent("");
              }
            }}
          >
            Add Note
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default NewNoteModal;
