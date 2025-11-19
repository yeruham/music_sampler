import * as Tone from "tone"


function playMusicNote(note: string): void{
    const player = new Tone.Player(note).toDestination();
    console.log("start 1")
    Tone.loaded().then(() => {
        console.log("start 2")
        player.start(Tone.now()).stop(Tone.now() + 2);
    })
}

export default playMusicNote;