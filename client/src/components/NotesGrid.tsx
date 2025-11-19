import { useState } from "react";
import "../style/NotesGrid.css";
import NotesColumn from "./NotesColumn";
import AddNoteCulumn from "./AddNoteCulumn";

function NotesGrid({ musicalNotes, gridColumns }: { musicalNotes: string[], gridColumns: number }) {

  const [numColumns, setNumColumns] = useState(gridColumns);

  const notesColumns = Array.from({ length: numColumns }, (_, i) => {
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
    <AddNoteCulumn handleClick={() => setNumColumns(numColumns + 1)}></AddNoteCulumn>
  </div>;
}

export default NotesGrid;
