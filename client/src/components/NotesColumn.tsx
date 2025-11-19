import NoteButton from "./NoteButton";

function NotesColumn({ musicalNotes, columnId }: { musicalNotes: string[], columnId: number }) {
  return (
    <>
      {musicalNotes.map((note) => {
        return <NoteButton note={note} key={note + columnId} />;
      })}
    </>
  );
}

export default NotesColumn;
