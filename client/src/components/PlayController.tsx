import { createContext, useEffect, useRef, useState, useMemo } from "react";
import * as Tone from "tone";
import GridController from "./grid/GridController";
import MelodyDashboard from "./play/MelodyDashboard";

export interface Player {
  players: React.RefObject<Tone.Players>;
  melodyNotes: string[][];
  currentPlayCulomn: number;
  instrument: string;
}

export const PlayContext = createContext<Player | null>(null);

function PlayController({ urls, instrument, melodyNotes }: { urls: { [key: string]: string }, instrument: string, melodyNotes?: string[][] }) {
  const volume = useRef(new Tone.Volume(-10).toDestination()).current;
  const players = useRef(new Tone.Players({urls, onerror: (err) => {console.error("Error loading buffer", err);}}).connect(volume));
  const musicalNotes = useMemo(() => Object.keys(urls), [urls])
  const melodyNotesRef = useRef<string[][]>([]);
  const [currentPlayColumn, setCurrentPlayColumn] = useState(-1);

  const player: Player = {
      players: players,
      melodyNotes: melodyNotes || melodyNotesRef.current,
      currentPlayCulomn: currentPlayColumn,
      instrument: instrument,
    }


  useEffect(() => {
    players.current = new Tone.Players(urls).connect(volume);
    melodyNotesRef.current.forEach((columnNotes) => { 
      columnNotes.splice(0, columnNotes.length);
    })
  }, [urls]);


  // useEffect(() => {
  //   if (melodyNotes){
  //     // melodyNotesRef.current.forEach((column) => {
  //     //   column.length = 0;
  //     // })
  //     // melodyNotesRef.current = melodyNotes;
  //   }
  //   console.log(melodyNotesRef.current);
  // }, [melodyNotes])

  return (
    <PlayContext.Provider value={player}>
      <GridController musicalNotes={musicalNotes}></GridController>
      <MelodyDashboard setCurrentPlayColumn={setCurrentPlayColumn} volume={volume}></MelodyDashboard>
    </PlayContext.Provider>
  );
}

export default PlayController;