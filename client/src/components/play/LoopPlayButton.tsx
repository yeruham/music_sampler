import { useState } from "react";
import type MelodyControl from "../../interfaces/MelodyControl";

function LoopPlayButoon({ melodyControl }: { melodyControl: MelodyControl }) {
  const [loopActive, setLoopActive] = useState(false);
  const className = loopActive ? "play-button loop-play-active" : "play-button";

  const handleLoop = () => {
    if (!loopActive){
        melodyControl.loopPlay.current = true;
        setLoopActive(true);
    }
    else{
        melodyControl.loopPlay.current = false;
        setLoopActive(false);
    }
  };

  return <button onClick={handleLoop} className={className}>loop</button>;
}

export default LoopPlayButoon;
