import type MelodyControl from '../interfaces/MelodyControl';


function StartPlayButton({ melodyControl }:{ melodyControl: MelodyControl }){;
    const startPlay = () => {
        melodyControl.setIsActivePlayer(true);
    }
    return (<button onClick={startPlay}>play</button>)
}

export default StartPlayButton;