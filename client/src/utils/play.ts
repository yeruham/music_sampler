import type MelodyControl from "../interfaces/MelodyControl";
import { type Player } from "../components/PlayController";

export interface PlayGridProps {
  player: Player;
  melodyControl: MelodyControl;
}

export async function playGrid({ player, melodyControl }: PlayGridProps) {
  const melodyNotes = player.melodyNotes;
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
        endPlay(isActivePlayer, setCurrentPlayColumn);
      }
    }
  }
}

async function playMelody({ player, melodyControl }: PlayGridProps) {
  const { melodyNotes, playNote } = player;
  const {
    isActivePlayer,
    isPausedPlayer,
    currentPlayColumn,
    setCurrentPlayColumn,
  } = melodyControl;

  const msBetweenColumns = 500;
  const column = melodyNotes[currentPlayColumn];
  column.forEach((note) => {
    playNote(note);
  });
  await deley(msBetweenColumns);
  if (isActivePlayer.current && !isPausedPlayer.current) {
    setCurrentPlayColumn(melodyControl.currentPlayColumn + 1);
  }
}


function endPlay(
  isActivePlayer: React.RefObject<boolean>,
  setCurrentPlayColumn: (num: number) => void
) {
  isActivePlayer.current = false;
  setCurrentPlayColumn(-1);
}


const deley = (ms: number) => {
  return new Promise((resulve) => setTimeout(resulve, ms));
};
