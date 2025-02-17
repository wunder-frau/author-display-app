import NoteItem from "./NoteItem";

interface Props {
  notes: { content: string }[];
}

const NoteListPage: React.FC<Props> = ({ notes }: Props) => {
  return (
    <div className="mt-5 bg-white p-5 border border-gray-300 rounded-lg">
      {notes.length > 0 ? (
        notes.map((note, index) => <NoteItem key={index} note={note} />)
      ) : (
        <p className="text-gray-600">No notes available.</p>
      )}
    </div>
  );
};

export default NoteListPage;
