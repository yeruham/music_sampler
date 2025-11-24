import type MelodyControl from "../../interfaces/MelodyControl";

function PausePlayButton({ melodyControl }: { melodyControl: MelodyControl }) {
  const PausePlay = () => {
    melodyControl.isPausedPlayer.current = true;
  };
  return <button onClick={PausePlay}>pause</button>;
}

export default PausePlayButton;
