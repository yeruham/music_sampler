import type MelodyControl from '../interfaces/MelodyControl';

function PausePlayButton( { melodyControl }: { melodyControl: MelodyControl } ){
    const PausePlay = () => {
        melodyControl.setIsActivePlayer(false);
    }
    return(<button onClick={PausePlay}>pause</button>)
}

export default PausePlayButton;