import type MelodyControl from "../../interfaces/MelodyControl";

function StartPlayButton({ melodyControl}: { melodyControl: MelodyControl }) {

  const handleClick = () => {
    const isPlaying = melodyControl.isActivePlayer.current && !melodyControl.isPausedPlayer.current;
    if (!isPlaying){
        melodyControl.isActivePlayer.current = true;
        melodyControl.isPausedPlayer.current = false;
        melodyControl.setCurrentPlayColumn(melodyControl.currentPlayColumn + 1);
    }
  };

  return <button onClick={handleClick}>play</button>;
}

export default StartPlayButton;
