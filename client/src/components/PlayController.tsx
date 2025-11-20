import { createContext, useRef, useState } from "react";
import * as Tone from "tone"
import GridController from './GridController';
import PlayGridButton from "./PlayGridButton";

export interface NotePlayer{
    play: (note: string) => void
    melodyNotes: string[][]
}

export const PlayContext = createContext();

function PlayController({ urls }: { urls: {[key: string] : string} }){

    const players = new Tone.Players(urls).toDestination();
    const musicalNotes = Object.keys(urls);
    const melodyNotes = useRef<string[][]>([])

    const playNote = (note: string) => {
        try{
            players.player(note).start().stop("+1");
        }
        catch (err){
            console.log(`Error Tone.Players cannot accept ${note}. ${err}`)
        }
    }

    const notePlayer: NotePlayer = {play: playNote, melodyNotes: melodyNotes.current}
    
    return(
    <PlayContext.Provider value={notePlayer}>
        <GridController musicalNotes={musicalNotes}></GridController>
        <PlayGridButton players={players}></PlayGridButton>
    </PlayContext.Provider>
    )
}

export default PlayController;