import { getMelody } from "../../utils/fetchMelodys";
import { type SavedMelodysProps } from "./SavedMelodysMenu";

interface SavedMelodyButtonProps {
  melodyName: string;
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const SavedMelodyButton = ({
  melodyName,
  setMelodyNotes,
  setCurrentInstrument,
  setMenuActive,
}: SavedMelodysProps & SavedMelodyButtonProps) => {
  const handleClick = async () => {
    const { melody, instrument } = await getMelody(melodyName);
    if (melody && instrument) {
      setMelodyNotes(melody);
      setCurrentInstrument(instrument);
    }
    setMenuActive(false);
  };
  return (
    <button className="melody-button" onClick={() => handleClick()}>
      {melodyName}
    </button>
  );
};

export default SavedMelodyButton;
