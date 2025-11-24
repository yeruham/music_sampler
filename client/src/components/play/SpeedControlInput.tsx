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
  const [speed, setSpeed] = useState(currentSpeed.current);
  const changeVolume = (num: string) => {
    currentSpeed.current = +num;
    setSpeed(+num);
  };

  return (
    <div>
      <label>speed </label>
      <input
        type="range"
        value={speed}
        min={min || 2}
        max={max || 8}
        step={step || 1}
        onChange={(e) => changeVolume(e.target.value)}
      ></input>
    </div>
  );
}

export default SpeedControlInput;