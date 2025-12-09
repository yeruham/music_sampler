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
  if (!min){ min = -20 }
  if (!max){ max = 0 }
  if (!step){ step = 2 }

  const [volume , setVolume] = useState(Number(currentVolume.volume.value.toFixed()));
  const changeVolume = (num: string) => {
    if (+num == min){
      currentVolume.mute = true;
    }
    else{
      currentVolume.mute = false;
      currentVolume.volume.value = +num;
    }
    setVolume(+num);
  };

  return (
    <div className="volume-input">
    <label>volume: {((max - min) + volume) / (max - min) * 100}</label>
      <input
        type="range"
        value={volume}
        min={min}
        max={max}
        step={step}
        onChange={(e) => changeVolume(e.target.value)}
      ></input>
    </div>
  );
}

export default VolumeControlInput;
