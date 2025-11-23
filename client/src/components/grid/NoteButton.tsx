import { useState, useContext } from "react";
import "./style/NoteButton.css";
import { PlayContext, type Player } from '../PlayController'


function NoteButton({ note, columnId }: { note: string, columnId: number }) {
  const [isActive, setIsActive] = useState(false);
  const player = useContext(PlayContext) as Player;

  const handleClick = () => {
    const melodyNotes = player.melodyNotes
    if (!isActive){
      player.playNpte(note);
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
