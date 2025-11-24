import { useState } from 'react';
import * as Tone from 'tone'


function VolumeControlInput({
  currentVolume,
  min,
  max,
  step,
}: {
  currentVolume: Tone.Volume;
  min?: number;
  max?: number;
  step?: number;
}) {
const [volume , setVolume] = useState(currentVolume.volume.value);
  const changeVolume = (num: string) => {
    currentVolume.volume.value = +num;
    setVolume(+num);
  };

  return (
    <div>
    <label>volume </label>
      <input
        type="range"
        value={volume}
        min={min || -20}
        max={max || 0}
        step={step || 1}
        onChange={(e) => changeVolume(e.target.value)}
      ></input>
    </div>
  );
}

export default VolumeControlInput;
