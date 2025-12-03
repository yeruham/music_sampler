import NoteButton from "./NoteButton";
import type Note from "../../interfaces/note";

function NotesColumn({ musicalNotes, columnId }: { musicalNotes:  Note[], columnId: number }) {
  return (
    <>
      {musicalNotes.map(({ name, active }) => {
        return <NoteButton name={name} active={active} columnId={columnId} key={name + columnId} />;
      })}
    </>
  );
}

export default NotesColumn;
