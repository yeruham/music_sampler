import type MelodyControl from "../../interfaces/MelodyControl";

function StopPlayButton({ melodyControl }: { melodyControl: MelodyControl }) {
  const startPlay = () => {
    melodyControl.isActivePlayer.current = false;
    melodyControl.setCurrentPlayColumn(-1);
  };
  return <button onClick={startPlay}>stop</button>;
}

export default StopPlayButton;
