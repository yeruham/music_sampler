import { useState, useContext } from "react";
import "../style/NoteButton.css";
import { PlayContext, type NotePlayer } from './PlayController'


function NoteButton({ note, columnId }: { note: string, columnId: number }) {
  const [isActive, setIsActive] = useState(false);
  const notePlayer = useContext(PlayContext) as NotePlayer;

  const handleClick = () => {
    const melodyNotes = notePlayer.melodyNotes
    if (!isActive){
      notePlayer.play(note);
      melodyNotes[columnId].push(note);
    }
    else{
      const indexOfNote = melodyNotes[columnId].indexOf(note);
      melodyNotes[columnId].splice(indexOfNote, 1);
    }
    setIsActive(!isActive);
  };

  const className = isActive? "note-button active": "note-button";
  return (
    <button className={className} onClick={handleClick}>
      {note}
    </button>
  );
}

export default NoteButton;
