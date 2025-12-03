import { getMelody } from "../../utils/fetchMelodys";

const SavedMelodyButton = ({ melodyName }: { melodyName: string }) => {
    const handleClick = async () => {
        const melody = await getMelody(melodyName);
        // console.log(melody);
    }
    return (<button className="melody-button" onClick={handleClick}>{melodyName}</button>)
}

export default SavedMelodyButton;