import { createContext, useRef, useState } from "react";
import * as Tone from "tone";
import GridController from "./grid/GridController";
import MelodyDashboard from "./play/MelodyDashboard";

export interface Player {
  playNpte: (note: string) => void;
  melodyNotes: string[][];
}

export const PlayContext = createContext<Player | null>(null);

function PlayController({ urls }: { urls: { [key: string]: string } }) {
  const players = new Tone.Players(urls).toDestination();
  const musicalNotes = Object.keys(urls);
  const melodyNotes = useRef<string[][]>([]);
  const currentPlay = useRef(-1);

  const playNote = (note: string) => {
    try {
      players.player(note).start().stop("+1");
    } catch (err) {
      console.log(`Error Tone.Players cannot accept ${note}. ${err}`);
    }
  };

  const player: Player = {
    playNpte: playNote,
    melodyNotes: melodyNotes.current,
  };

  return (
    <PlayContext.Provider value={player}>
      <GridController musicalNotes={musicalNotes}></GridController>
      <MelodyDashboard></MelodyDashboard>
    </PlayContext.Provider>
  );
}

export default PlayController;
