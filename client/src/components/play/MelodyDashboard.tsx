import * as Tone from 'tone'
import { useContext, useEffect, useMemo, useRef } from "react";
import './style/MelodyDashboard.css'
import StartPlayButton from "./StartPlayButton";
import LoopPlayButoon from "./LoopPlayButton";
import StopPlayButton from "./StopPlayButton";
import SpeedControlInput from "./SpeedControlInput";
import VolumeControlInput from "./VolumeControlInput";
import { PlayContext, type Player } from "../PlayController";
import type MelodyControl from "../../interfaces/MelodyControl";
import * as Play from '../../utils/play'
import SaveMelodtButton from "./SaveMelodyButton";


function MelodyDashboard({ setCurrentPlayColumn, volume }: { setCurrentPlayColumn: React.Dispatch<React.SetStateAction<number>>, volume: Tone.Volume }) {
  const player = useContext(PlayContext) as Player;
  const isActivePlayer = player.isActivePlayer;
  const isPausedPlayer = useRef(false);
  const loopPlay = useRef(false);
  const currentPlayColumn = player.currentPlayCulomn;
  const speedPlayer = useRef(4);


  useEffect(() => {
    const playGridProps: Play.PlayGridProps = { player: player, melodyControl: melodyControl };
    Play.playGrid(playGridProps);
  }, [currentPlayColumn]);

  const melodyControl: MelodyControl = useMemo( () => ({
    currentPlayColumn: currentPlayColumn,
    setCurrentPlayColumn: setCurrentPlayColumn,
    isActivePlayer: isActivePlayer,
    isPausedPlayer: isPausedPlayer,
    loopPlay: loopPlay,
    speed: speedPlayer,
  }), [currentPlayColumn, setCurrentPlayColumn, isActivePlayer, isPausedPlayer, loopPlay, speedPlayer ])

  return (
    <div className="part melody-dashboard">
      <SaveMelodtButton></SaveMelodtButton>
      <StartPlayButton melodyControl={melodyControl}></StartPlayButton>
      <StopPlayButton melodyControl={melodyControl}></StopPlayButton>
      <LoopPlayButoon melodyControl={melodyControl}></LoopPlayButoon>
      <SpeedControlInput currentSpeed={speedPlayer}></SpeedControlInput>
      <VolumeControlInput currentVolume={volume}></VolumeControlInput>
    </div>
  );
}

export default MelodyDashboard;