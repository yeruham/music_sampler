import { useState, useContext } from "react";
import "./style/NoteButton.css";
import { PlayContext, type Player } from '../PlayController'


function NoteButton({ note, columnId }: { note: string, columnId: number }) {
  const [isActive, setIsActive] = useState(false);
  const player = useContext(PlayContext) as Player;

  const handleClick = () => {
    const melodyNotes = player.melodyNotes
    if (!isActive){
      player.playNote(note);
      melodyNotes[columnId].push(note);
    }
    else{
      const indexOfNote = melodyNotes[columnId].indexOf(note);
      melodyNotes[columnId].splice(indexOfNote, 1);
    }
    setIsActive(!isActive);
  };

  const getClaasName = () => {
    let className = "note-button";
    if (isActive){
      className += " active"
    }
    if (player.currentPlayCulomn == columnId){
      className += " playing";
    }
    return className;
  }

  return (
    <button className={getClaasName()} onClick={handleClick}>
      {note}
    </button>
  );
}

export default NoteButton;
