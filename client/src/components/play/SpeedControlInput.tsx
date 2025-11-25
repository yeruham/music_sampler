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
  const changeVolume = (inputValue: string) => {
    const num = (max || 8) + (min || 2) - +inputValue;
    currentSpeed.current = +num;
    setSpeed(+inputValue);
  };

  return (
    <div className="speed-input">
      <label>speed</label>
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