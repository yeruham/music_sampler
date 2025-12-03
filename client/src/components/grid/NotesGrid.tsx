import { useContext, useEffect, useRef } from "react";
import "./style/NotesGrid.css";
import NotesColumn from "./NotesColumn";
import { PlayContext, type Player } from "../PlayController";
import type Note from "../../interfaces/note";

function NotesGrid({ musicalNotes, gridColumns }: { musicalNotes: string[]; gridColumns: number; }) {
  const player = useContext(PlayContext) as Player;
  // console.log(player.melodyNotes)

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


  const getNotesList = (culomnId: number): Note[] => {
    const notes: Note[] = [];
    const notesActivity = player.melodyNotes[culomnId];
    musicalNotes.forEach((noteName) => {
        const noteActive = notesActivity ? notesActivity.includes(noteName) : false;
        // console.log(`${culomnId} ${noteName} ${noteActive}`)
        const note: Note = {name: noteName, active: noteActive};
        notes.push(note);
    })
    return notes;
  }

  const notesColumns = Array.from({ length: gridColumns }, (_, i) => {
    const notes = getNotesList(i);
    return (
      <NotesColumn
        musicalNotes={notes}
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