import { createContext, useRef, useState } from "react";
import * as Tone from "tone";
import GridController from "./grid/GridController";
import MelodyDashboard from "./play/MelodyDashboard";

export interface Player {
  playNote: (note: string) => void;
  melodyNotes: string[][];
  currentPlayCulomn: number;
}

export const PlayContext = createContext<Player | null>(null);

function PlayController({ urls }: { urls: { [key: string]: string } }) {
  const players = useRef(new Tone.Players(urls).toDestination()).current;
  const musicalNotes = Object.keys(urls);
  const melodyNotes = useRef<string[][]>([]);
  const [currentPlayColumn, setCurrentPlayColumn] = useState(-1);

  const playNote = (note: string) => {
    try {
      players.player(note).start().stop("+1");
    } catch (err) {
      console.log(`Error Tone.Players cannot accept ${note}. ${err}`);
    }
  };

  const player: Player = {
    playNote: playNote,
    melodyNotes: melodyNotes.current,
    currentPlayCulomn: currentPlayColumn,
  };

  return (
    <PlayContext.Provider value={player}>
      <GridController musicalNotes={musicalNotes}></GridController>
      <MelodyDashboard setCurrentPlayColumn={setCurrentPlayColumn}></MelodyDashboard>
    </PlayContext.Provider>
  );
}

export default PlayController;
