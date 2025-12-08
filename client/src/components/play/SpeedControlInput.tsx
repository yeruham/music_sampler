import { useState } from "react";

function SpeedControlInput({
  currentSpeed,
  min,
  max,
  step,
}: {
  currentSpeed: React.RefObject<number>;
  min?: number;
  max?: number;
  step?: number;
}) {
  if (!min){ min = 1 }
  if (!max){ max = 8 }
  if (!step){ step = 1 }

  const [speed, setSpeed] = useState(currentSpeed.current);
  const changeVolume = (inputValue: string) => {
    const num = max + min - +inputValue;
    currentSpeed.current = +num;
    setSpeed(+inputValue);
  };

  return (
    <div className="speed-input">
      <label>speed: {speed / max * 2}</label>
      <input
        type="range"
        value={speed}
        min={min}
        max={max}
        step={step}
        onChange={(e) => changeVolume(e.target.value)}
      ></input>
    </div>
  );
}

export default SpeedControlInput;