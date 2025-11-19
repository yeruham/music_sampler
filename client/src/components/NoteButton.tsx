import { useState } from "react";
import "../style/NoteButton.css";
import playMusicNote from "../utils/tone";

function NoteButton({ note }: { note: string }) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    if (!isActive){
      playMusicNote(note);
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
