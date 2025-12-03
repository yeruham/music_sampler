import { useEffect, useRef, useState } from "react";
import "./style/savedMelodys.css";
import SavedMelodyButton from "./SavedMelodyButton";
import { getMelodysNames } from "../../utils/fetchMelodys";

export interface SavedMelodysProps{
  setMelodyNotes: React.Dispatch<React.SetStateAction<string[][] | undefined>>
  setCurrentInstrument: React.Dispatch<React.SetStateAction<string | undefined>>
}

const SavedMelodysMenu = ({ setMelodyNotes, setCurrentInstrument }: SavedMelodysProps) => {
  const [menuActive, setMenuActive] = useState(false);

  const melodys = useRef<string[]>([]);

  useEffect(() => {
    getMelodysNames()
      .then((melodysNames) => {
        if (melodysNames) {
          melodys.current = melodysNames;
        }
      })
      .catch();
  }, []);

  return (
    <div>
      <button
        className="saved-melodys"
        onClick={() => {
          setMenuActive(!menuActive);
        }}
      >
        Saved Melodys
      </button>
      {menuActive && (
        <div className="melodys-menu">
          {melodys.current.map((melody) => {
            return (
              <SavedMelodyButton
                melodyName={melody}
                setMelodyNotes={setMelodyNotes}
                setCurrentInstrument={setCurrentInstrument}
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
