import * as Tone from 'tone'
import { useContext, useEffect, useRef } from "react";
import './style/MelodyDashboard.css'
import StartPlayButton from "./StartPlayButton";
import LoopPlayButoon from "./LoopPlayButton";
import StopPlayButton from "./StopPlayButton";
import SpeedControlInput from "./SpeedControlInput";
import PausePlayButton from "./PausePlayButton";
import VolumeControlInput from "./VolumeControlInput";
import { PlayContext, type Player } from "../PlayController";
import type MelodyControl from "../../interfaces/MelodyControl";
import * as Play from '../../utils/play'


function MelodyDashboard({ setCurrentPlayColumn, volume }: { setCurrentPlayColumn: React.Dispatch<React.SetStateAction<number>>, volume: Tone.Volume }) {
  const player = useContext(PlayContext) as Player;
  const isActivePlayer = useRef(false);
  const isPausedPlayer = useRef(false);
  const loopPlay = useRef(false);
  const currentPlayColumn = player.currentPlayCulomn;
  const speedPlayer = useRef(5);
  const volumePlayer = useRef(-1);
  const melodyNotes = player.melodyNotes;



  useEffect(() => {
    const playGridProps: Play.PlayGridProps = { player: player, melodyControl: melodyControl };
    Play.playGrid(playGridProps);
  }, [currentPlayColumn]);

  const melodyControl: MelodyControl = {
    currentPlayColumn: currentPlayColumn,
    setCurrentPlayColumn: setCurrentPlayColumn,
    isActivePlayer: isActivePlayer,
    isPausedPlayer: isPausedPlayer,
    loopPlay: loopPlay,
    speed: speedPlayer,
  };

  return (
    <div className="melody-dashboard">
      <StartPlayButton melodyControl={melodyControl}></StartPlayButton>
      <StopPlayButton melodyControl={melodyControl}></StopPlayButton>
      <LoopPlayButoon melodyControl={melodyControl}></LoopPlayButoon>
      <PausePlayButton melodyControl={melodyControl}></PausePlayButton>
      <SpeedControlInput currentSpeed={speedPlayer}></SpeedControlInput>
      <VolumeControlInput currentVolume={volume}></VolumeControlInput>
    </div>
  );
}

export default MelodyDashboard;