import { getMelody } from "../../utils/fetchMelodys";
import { type SavedMelodysProps } from "./SavedMelodysMenu";

const SavedMelodyButton = ({
  melodyName,
  setMelodyNotes,
  setCurrentInstrument,
}: { melodyName: string } & SavedMelodysProps) => {
  const handleClick = async () => {
    const {melody, instrument} = await getMelody(melodyName);
    if (melody && instrument){
        setMelodyNotes(melody);
        setCurrentInstrument(instrument);
    }
  };
  return (
    <button className="melody-button" onClick={() => handleClick()}>
      {melodyName}
    </button>
  );
};

export default SavedMelodyButton;
