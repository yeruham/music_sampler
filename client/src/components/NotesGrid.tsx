import { useState } from "react";
import "../style/NotesGrid.css";
import NotesColumn from "./NotesColumn";

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

  const gridTemplateRowsStyle = {  gridTemplateRows: `repeat(${musicalNotes.length}, auto)`}

  return <div className="notes-grid" style={gridTemplateRowsStyle}>
    {notesColumns}
  </div>;
}

export default NotesGrid;
