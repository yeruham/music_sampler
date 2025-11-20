import { useContext } from "react";
import * as Tone from "tone"
import { PlayContext, type NotePlayer } from "./PlayController";

function PlayGridButton({ players }: { players:  Tone.Players}){
    const notePlayer = useContext(PlayContext) as NotePlayer;
    const onClick = () => { console.log(notePlayer.melodyNotes) }

    const deley = (ms: number) => {
        return new Promise(resulve => setTimeout(resulve, ms));
    }

    const playGrid = async () => {
        const melodyNotes = notePlayer.melodyNotes;
        const msBetweenColumns = 500;
        for (let i = 0; i < melodyNotes.length; i++){
            const column = melodyNotes[i]
            column.forEach((note) => {
                console.log(note)
                notePlayer.play(note);
            })
            await deley(msBetweenColumns);
        }
        // let time = 0;
        // melodyNotes.forEach((column) => {
        //     column.forEach((note) => {
        //         players.player(note).start(time)
        //     })
        //     time += 0.5;
        // })
    }
    return (<button onClick={playGrid}>play</button>)
}

export default PlayGridButton;