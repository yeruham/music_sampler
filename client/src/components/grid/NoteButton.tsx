import { useState, useContext } from "react";
import "./style/NoteButton.css";
import { PlayContext, type Player } from '../PlayController'
import type Note from "../../interfaces/note";


function NoteButton({ name, active, columnId }: Note & { columnId: number }) {
  const noteName = name;
  const [isActive, setIsActive] = useState(active);
  const player = useContext(PlayContext) as Player;

  const handleClick = () => {
    const melodyNotes = player.melodyNotes
    if (!isActive){
      playNote(noteName);
      melodyNotes[columnId].push(noteName);
    }
    else{
      const indexOfNote = melodyNotes[columnId].indexOf(noteName);
      melodyNotes[columnId].splice(indexOfNote, 1);
    }
    setIsActive(!isActive);
  };

  const playNote = (note: string) => {
    try {
      player.players.current.player(note).start().stop("+0.5");
    } catch (err) {
      console.log(`Error Tone.Players cannot accept ${note}. ${err}`);
    }
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
      {noteName}
    </button>
  );
}

export default NoteButton;
