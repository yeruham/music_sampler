import { useState } from "react";
import type MelodyControl from "../../interfaces/MelodyControl";

function StartPlayButton({ melodyControl }: { melodyControl: MelodyControl }) {
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const isPlaying = melodyControl.isActivePlayer.current;

  const handleClick = () => {
    if (!isPlaying) {
      melodyControl.isActivePlayer.current = true;
      melodyControl.isPausedPlayer.current = false;
      melodyControl.setCurrentPlayColumn(melodyControl.currentPlayColumn + 1);
    } 
    else if (!isPaused){
      melodyControl.isPausedPlayer.current = true;
      setIsPaused(true);
    }
    else{
      melodyControl.isPausedPlayer.current = false;
      melodyControl.setCurrentPlayColumn(melodyControl.currentPlayColumn + 1);
      setIsPaused(false);
    }
  };


  const getMessage = () => {
    if (!isPlaying){ return "play"; }
    else if (isPaused){ return "continue"; }
    else{ return "pause"; }
  }

  const getClassName = () => {
    if (!isPlaying){ return "play-button play"; }
    else if (isPaused){ return "play-button continue"; }
    else{ return "play-button pause"; }
  }

  return (
    <button onClick={handleClick} className={getClassName()} >
      {getMessage()}
    </button>
  );
}

export default StartPlayButton;
