import { useState } from "react";
import "./NoteButton.css";
import playMusicNote from "../utils/tone";

function NoteButton({ note }: { note: string }) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    playMusicNote(note);
    setIsActive(!isActive);
  };
  const style = {
    backgroundColor: isActive ? "red" : "#4caf50"
  }
  return (
    <button style={style} className="note-button" onClick={handleClick}>
      {note}
    </button>
  );
}

export default NoteButton;
