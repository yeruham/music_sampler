import { useEffect, useState } from "react";
import "./style/savedMelodys.css";
import SavedMelodyButton from "./SavedMelodyButton";
import { getMelodysNames } from "../../utils/fetchMelodys";

export interface SavedMelodysProps{
  setMelodyNotes: React.Dispatch<React.SetStateAction<string[][] | undefined>>;
  setCurrentInstrument: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const SavedMelodysMenu = ({ setMelodyNotes, setCurrentInstrument }: SavedMelodysProps) => {
  const [menuActive, setMenuActive] = useState(false);
  const [melodys, setMelodys] = useState<string[]>([]);

  useEffect(() => {
    if (menuActive){
      getMelodysNames()
        .then((melodysNames) => {
          if (melodysNames) {
            setMelodys(melodysNames);
          }
        })
        .catch();
    }
  }, [menuActive]);

  const handleClick = () => {
    setMenuActive(!menuActive);
  }

  return (
    <div>
      <button className="saved-melodys" onClick={handleClick}>Saved Melodys</button>
      {menuActive && (
        <div className="melodys-menu">
          {melodys.map((melody) => {
            return (
              <SavedMelodyButton
                melodyName={melody}
                setMelodyNotes={setMelodyNotes}
                setCurrentInstrument={setCurrentInstrument}
                setMenuActive={setMenuActive}
                key={melody}
              ></SavedMelodyButton>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SavedMelodysMenu;
