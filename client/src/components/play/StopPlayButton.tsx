import type MelodyControl from "../../interfaces/MelodyControl";

function StopPlayButton({ melodyControl }: { melodyControl: MelodyControl }) {
  const startPlay = () => {
    // melodyControl.setIsActivePlayer(false);
    melodyControl.isActivePlayer.current = false;
    melodyControl.setCurrentPlayColumn(0);
    console.log("stop ---- ")
  };
  return <button onClick={startPlay}>stop</button>;
}

export default StopPlayButton;
