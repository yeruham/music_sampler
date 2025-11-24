import * as Tone from "tone";
import type MelodyControl from "../interfaces/MelodyControl";
import { type Player } from "../components/PlayController";

export interface PlayGridProps {
  player: Player;
  melodyControl: MelodyControl;
}

export async function playGrid({ player, melodyControl }: PlayGridProps) {
  const { melodyNotes, players} = player;
  const {
    isActivePlayer,
    isPausedPlayer,
    currentPlayColumn,
    setCurrentPlayColumn,
    loopPlay,
  } = melodyControl;

  if (isActivePlayer.current && !isPausedPlayer.current) {
    if (currentPlayColumn < melodyNotes.length) {
      playMelody({ player, melodyControl });
    } else {
      if (loopPlay.current) {
        setCurrentPlayColumn(0);
      } else {
        endPlay(players, isActivePlayer, setCurrentPlayColumn);
      }
    }
  }
}

async function playMelody({ player, melodyControl }: PlayGridProps) {
  const { melodyNotes, players } = player;
  const {
    isActivePlayer,
    isPausedPlayer,
    currentPlayColumn,
    setCurrentPlayColumn,
    speed,
  } = melodyControl;

  const msBetweenColumns = speed.current * 100;
  const column = melodyNotes[currentPlayColumn];
  players.stopAll();
  column.forEach((note) => {
    try {
      players.player(note).start();
    } catch (err) {
      console.log(`Error Tone.Players cannot accept ${note}. ${err}`);
    }
  });
  await deley(msBetweenColumns);
  if (isActivePlayer.current && !isPausedPlayer.current) {
    setCurrentPlayColumn(currentPlayColumn + 1);
  }
}

function endPlay(
  players: Tone.Players,
  isActivePlayer: React.RefObject<boolean>,
  setCurrentPlayColumn: (num: number) => void
) {
  isActivePlayer.current = false;
  setCurrentPlayColumn(-1);
  players.stopAll();
}

const deley = (ms: number) => {
  return new Promise((resulve) => setTimeout(resulve, ms));
};
