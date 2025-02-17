interface Props {
    note: { content: string };
  }
  
  const NoteItem: React.FC<Props> = ({ note }: Props) => {
    return (
      <div className="p-4 border border-amber-700 rounded-md shadow-sm bg-white">
        <p className="text-gray-800 text-sm">{note.content}</p>
      </div>
    );
  };
  
  export default NoteItem;