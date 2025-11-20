import { useContext } from "react";
import { PlayContext, type NotePlayer } from "./PlayController";

function PlayGridButton(){
    const notePlayer = useContext(PlayContext) as NotePlayer;
    const onClick = () => { console.log(notePlayer.melodyNotes) }
    return (<button onClick={onClick}>play</button>)
}

export default PlayGridButton;