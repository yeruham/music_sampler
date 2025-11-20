import { createContext } from "react";
import * as Tone from "tone"
import * as tone from '../utils/tone'
import GridController from './GridController';

export interface NotePlayer{
    play: (note: string) => void
}

export const PlayContext = createContext();

function PlayController({ urls }: { urls: {[key: string] : string} }){

    const players = new Tone.Players(urls).toDestination();
    const musicalNotes = Object.keys(urls);

    const playNote = (note: string) => {
        try{
            players.player(note).start().stop("+2");
        }
        catch (err){
            console.log(`Error Tone.Players cannot accept ${note}. ${err}`)
        }
    }

    const notePlayer: NotePlayer = {play: playNote}
    
    return(
    <PlayContext.Provider value={notePlayer}>
        <GridController musicalNotes={musicalNotes}></GridController>
    </PlayContext.Provider>
    )
}

export default PlayController;