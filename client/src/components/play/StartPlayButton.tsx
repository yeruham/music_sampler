import type MelodyControl from "../../interfaces/MelodyControl";

function StartPlayButton({ melodyControl, startPlay }: { melodyControl: MelodyControl, startPlay: () => void }) {
  const handleClick = () => {
    // melodyControl.setIsActivePlayer(true);
    const isPlaying = melodyControl.isActivePlayer.current && !melodyControl.isPausedPlayer.current;
    if (!isPlaying){
        melodyControl.isActivePlayer.current = true;
        melodyControl.isPausedPlayer.current = false;
        startPlay();
    }
  };
  return <button onClick={handleClick}>play</button>;
}

export default StartPlayButton;
