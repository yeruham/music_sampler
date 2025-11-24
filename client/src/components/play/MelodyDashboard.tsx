import { useContext, useEffect, useRef } from "react";
import StartPlayButton from "./StartPlayButton";
import LoopPlayButoon from "./LoopPlayButton";
import StopPlayButton from "./StopPlayButton";
import SpeedControlButton from "./SpeedControlButton";
import PausePlayButton from "./PausePlayButton";
import { PlayContext, type Player } from "../PlayController";
import type MelodyControl from "../../interfaces/MelodyControl";
import * as Play from '../../utils/play'


function MelodyDashboard({ setCurrentPlayColumn }: { setCurrentPlayColumn: React.Dispatch<React.SetStateAction<number>> }) {
  const player = useContext(PlayContext) as Player;
  const isActivePlayer = useRef(false);
  const isPausedPlayer = useRef(false);
  const loopPlay = useRef(false);
  const currentPlayColumn = player.currentPlayCulomn;
  const speedPlayer = useRef(500);
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
  };

  return (
    <div id=" melody-dashboard">
      <StartPlayButton melodyControl={melodyControl}></StartPlayButton>
      <StopPlayButton melodyControl={melodyControl}></StopPlayButton>
      <LoopPlayButoon melodyControl={melodyControl}></LoopPlayButoon>
      <SpeedControlButton></SpeedControlButton>
      <PausePlayButton melodyControl={melodyControl}></PausePlayButton>
    </div>
  );
}

export default MelodyDashboard;