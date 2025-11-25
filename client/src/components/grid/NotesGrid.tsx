import { useContext, useEffect } from "react";
import "./style/NotesGrid.css";
import NotesColumn from "./NotesColumn";
import { PlayContext, type Player } from "../PlayController";

function NotesGrid({
  musicalNotes,
  gridColumns,
}: {
  musicalNotes: string[];
  gridColumns: number;
}) {
  const player = useContext(PlayContext) as Player;

  useEffect(() => {
    const melodyNotes = player.melodyNotes;
    const lenMelodyNotes = player.melodyNotes.length;
    if (lenMelodyNotes > gridColumns) {
      player.melodyNotes.splice(gridColumns);
    } else {
      for (let i = lenMelodyNotes; i < gridColumns; i++) {
        melodyNotes.push([]);
      }
    }
  }, [gridColumns]);

  const notesColumns = Array.from({ length: gridColumns }, (_, i) => {
    return (
      <NotesColumn
        musicalNotes={musicalNotes}
        columnId={i}
        key={i}
      ></NotesColumn>
    );
  });

  const gridTemplateRowsStyle = {
    gridTemplateRows: `repeat(${musicalNotes.length}, 50px)`,
  };

  return (
    <div className="part notes-grid" style={gridTemplateRowsStyle}>
      {notesColumns}
    </div>
  );
}

export default NotesGrid;
