import { useContext, useEffect, useRef, useState } from 'react';
import StartPlayButton from "./StartPlayButton";
import LoopPlayButoon from "./LoopPlayButton";
import StopPlayButton from "./StopPlayButton";
import SpeedControlButton from './SpeedControlButton';
import PausePlayButton from './PausePlayButton';
import { PlayContext, type Player } from "./PlayController";
import type MelodyControl from '../interfaces/MelodyControl';


function MelodyDashboard(){

    const player = useContext(PlayContext) as Player;
    const [isActivePlayer, setIsActivePlayer] = useState(false);
    const loopPlay = useRef(false);
    const [currentPlayColumn, setCurrentPlayColumn] = useState(0);
    const speedPlayer = useRef(500);
    const volumePlayer = useRef(-1);
    const melodyNotes = player.melodyNotes;

    const deley = (ms: number) => {
        return new Promise(resulve => setTimeout(resulve, ms));
    }

    const playGrid = async () => {
        if (isActivePlayer){
            const msBetweenColumns = speedPlayer.current;
            if (currentPlayColumn < melodyNotes.length){
                const column = melodyNotes[currentPlayColumn];
                column.forEach((note) => {
                    player.playNpte(note);
                });
            await deley(msBetweenColumns);
            setCurrentPlayColumn(currentPlayColumn + 1);
            }
            else{
                if(loopPlay.current){
                    setCurrentPlayColumn(0);
                    console.log("loop start")
                }
                else{
                    setIsActivePlayer(false);
                    setCurrentPlayColumn(0); 
                }  
            }
        }   
    }



  

    useEffect(() => {playGrid()}, [isActivePlayer, currentPlayColumn])

    const melodyControl: MelodyControl = {setCurrentPlayColumn: setCurrentPlayColumn,
                                          setIsActivePlayer: setIsActivePlayer, 
                                          loopPlay: loopPlay}

    return (<div id=" melody-dashboard">
        <StartPlayButton melodyControl={melodyControl}></StartPlayButton>
        <StopPlayButton melodyControl={melodyControl}></StopPlayButton>
        <LoopPlayButoon melodyControl={melodyControl}></LoopPlayButoon>
        <SpeedControlButton></SpeedControlButton>
        <PausePlayButton melodyControl={melodyControl}></PausePlayButton>
    </div>)
}

export default MelodyDashboard;