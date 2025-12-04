import { useContext, useMemo } from "react";
import "./style/NotesGrid.css";
import NotesColumn from "./NotesColumn";
import { PlayContext, type Player } from "../PlayController";
import type Note from "../../interfaces/note";

function NotesGrid({ musicalNotes, gridColumns }: { musicalNotes: string[]; gridColumns: number; }) {
  const player = useContext(PlayContext) as Player;


  const getNotesList = (culomnId: number): Note[] => {
    const notes: Note[] = [];
    const notesActivity = player.melodyNotes[culomnId];
    // console.log(notesActivity);
    musicalNotes.forEach((noteName) => {
        const noteActive = notesActivity ? notesActivity.includes(noteName) : false;
        const note: Note = {name: noteName, active: noteActive};
        notes.push(note);
    })
    return notes;
  }

  const notesColumns = useMemo(() => {
    // console.log("memo")
    return (Array.from({ length: gridColumns }, (_, i) => {
    const notes = getNotesList(i);
    return (
      <NotesColumn
        musicalNotes={notes}
        columnId={i}
        key={i}
      ></NotesColumn>
    );
  }));
  }, [musicalNotes, gridColumns, player.melodyNotes])

  // console.log(player.melodyNotes);
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