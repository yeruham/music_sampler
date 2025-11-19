import { useState } from "react";
import "../style/NotesGrid.css";
import NotesColumn from "./NotesColumn";
import AddNoteCulumn from "./AddNoteCulumn";

function NotesGrid({ musicalNotes, gridColumns }: { musicalNotes: string[], gridColumns: number }) {


  const notesColumns = Array.from({ length: gridColumns }, (_, i) => {
    return (
      <NotesColumn
        musicalNotes={musicalNotes}
        columnId={i}
        key={i}
      ></NotesColumn>
    );
  });

  return <div className="notes-grid">
    {notesColumns}
  </div>;
}

export default NotesGrid;
