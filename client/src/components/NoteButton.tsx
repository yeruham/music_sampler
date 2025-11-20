import { useState, useContext } from "react";
import "../style/NoteButton.css";
import * as Tone from "tone"
import { PlayContext, type NotePlayer } from './PlayController'


function NoteButton({ note }: { note: string }) {
  const [isActive, setIsActive] = useState(false);
  const notePlayer = useContext(PlayContext) as NotePlayer;

  const handleClick = () => {
    if (!isActive){
      notePlayer.play(note);
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
