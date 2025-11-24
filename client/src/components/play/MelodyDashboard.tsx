import { useContext, useEffect, useRef, useState } from "react";
import StartPlayButton from "./StartPlayButton";
import LoopPlayButoon from "./LoopPlayButton";
import StopPlayButton from "./StopPlayButton";
import SpeedControlButton from "./SpeedControlButton";
import PausePlayButton from "./PausePlayButton";
import { PlayContext, type Player } from "../PlayController";
import type MelodyControl from "../../interfaces/MelodyControl";


function MelodyDashboard({ setCurrentPlayColumn }: { setCurrentPlayColumn: React.Dispatch<React.SetStateAction<number>> }) {
  const player = useContext(PlayContext) as Player;
  const isActivePlayer = useRef(false);
  const isPausedPlayer = useRef(false);
  const loopPlay = useRef(false);
  // const [currentPlayColumn, setCurrentPlayColumn] = useState(0);
  const currentPlayColumn = player.currentPlayCulomn;
  const speedPlayer = useRef(500);
  const volumePlayer = useRef(-1);
  const melodyNotes = player.melodyNotes;

  const deley = (ms: number) => {
    return new Promise((resulve) => setTimeout(resulve, ms));
  };

  const playGrid = async () => {
    if (isActivePlayer.current && !isPausedPlayer.current) {
      const msBetweenColumns = speedPlayer.current;
      if (currentPlayColumn < melodyNotes.length) {
        console.log(currentPlayColumn)
        const column = melodyNotes[currentPlayColumn];
        column.forEach((note) => {
          player.playNote(note);
        });
        await deley(msBetweenColumns);
        if (isActivePlayer.current){
            setCurrentPlayColumn(currentPlayColumn + 1);
            console.log("after --- " + currentPlayColumn)
        }
      } else {
        if (loopPlay.current) {
          setCurrentPlayColumn(0);
          console.log("loop start");
        } else {
          // setIsActivePlayer(false);
          isActivePlayer.current = false;
          setCurrentPlayColumn(0);
        }
      }
    }
  };

  // const startPlay = async () => {
  //   const msBetweenColumns = speedPlayer.current;
  //      do {
  //      for (let i = currentPlayColumn; i < melodyNotes.length; i++){
  //       if (isActivePlayer){
  //         const column = melodyNotes[i];
  //         column.forEach((note) => {
  //         player.playNpte(note);
  //       });
  //       console.log(currentPlayColumn);
  //         setCurrentPlayColumn(i + 1);
  //         await deley(msBetweenColumns);
  //       }
  //     }
  //   }
  //   while (isActivePlayer && loopPlay.current);
  // }

  useEffect(() => {
    playGrid();
  }, [currentPlayColumn]);

  const melodyControl: MelodyControl = {
    setCurrentPlayColumn: setCurrentPlayColumn,
    isActivePlayer: isActivePlayer,
    isPausedPlayer: isPausedPlayer,
    loopPlay: loopPlay,
  };

  return (
    <div id=" melody-dashboard">
      <StartPlayButton melodyControl={melodyControl} startPlay={playGrid}></StartPlayButton>
      <StopPlayButton melodyControl={melodyControl}></StopPlayButton>
      <LoopPlayButoon melodyControl={melodyControl}></LoopPlayButoon>
      <SpeedControlButton></SpeedControlButton>
      <PausePlayButton melodyControl={melodyControl}></PausePlayButton>
    </div>
  );
}

export default MelodyDashboard;