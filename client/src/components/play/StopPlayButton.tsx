import type MelodyControl from "../../interfaces/MelodyControl";

function StopPlayButton({ melodyControl }: { melodyControl: MelodyControl }) {
  const handleClick = () => {
    melodyControl.isActivePlayer.current = false;
    melodyControl.setCurrentPlayColumn(-1);
  };
  return <button onClick={handleClick} className="play-button stop">stop</button>;
}

export default StopPlayButton;
