import type MelodyControl from '../interfaces/MelodyControl';
import { type Player } from '../components/PlayController'


export async function playGrid({  melodyNotes, playNote, isActivePlayer, isPausedPlayer, currentPlayColumn, setCurrentPlayColumn, loopPlay }: Player & MelodyControl){
  if (isActivePlayer.current && !isPausedPlayer.current) {
    const msBetweenColumns = 500;
    if (currentPlayColumn < melodyNotes.length) {
      const column = melodyNotes[currentPlayColumn];
      column.forEach((note) => {
        playNote(note);
      });
      await deley(msBetweenColumns);
      if (isActivePlayer.current && !isPausedPlayer.current) {
        setCurrentPlayColumn(currentPlayColumn + 1);
      }
    } else {
      if (loopPlay.current) {
        setCurrentPlayColumn(0);
      } else {
        isActivePlayer.current = false;
        setCurrentPlayColumn(-1);
      }
    }
  }
};

const deley = (ms: number) => {
  return new Promise((resulve) => setTimeout(resulve, ms));
};