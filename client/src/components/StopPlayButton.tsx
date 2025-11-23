import type MelodyControl from '../interfaces/MelodyControl';

function StopPlayButton( { melodyControl }: {melodyControl: MelodyControl} ){;
    const startPlay = () => {
        console.log("stop")
        melodyControl.setIsActivePlayer(false);
        melodyControl.setCurrentPlayColumn(0);
    }
    return (<button onClick={startPlay}>stop</button>)
}

export default StopPlayButton;