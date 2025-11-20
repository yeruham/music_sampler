import { useContext, useEffect } from "react";
import "../style/NotesGrid.css";
import NotesColumn from "./NotesColumn";
import { PlayContext, type NotePlayer } from './PlayController'


function NotesGrid({ musicalNotes, gridColumns }: { musicalNotes: string[], gridColumns: number }) {
  const notePlayer = useContext(PlayContext) as NotePlayer;
  
  useEffect(() => {
    const melodyNotes = notePlayer.melodyNotes
    const lenMelodyNotes = notePlayer.melodyNotes.length;
    if (lenMelodyNotes > gridColumns){
      notePlayer.melodyNotes.splice(gridColumns);
    }else{
    for (let i = lenMelodyNotes; i < gridColumns; i++){
      melodyNotes.push([]);
    }
  }
  }, [gridColumns])




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
