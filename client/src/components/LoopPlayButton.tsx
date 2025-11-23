import type MelodyControl from '../interfaces/MelodyControl';

function LoopPlayButoon({ melodyControl }: { melodyControl: MelodyControl }){
    const handleLoop = () => {
        melodyControl.loopPlay.current = true;
    }
    return(<button onClick={handleLoop}>loop</button>)
}

export default LoopPlayButoon;