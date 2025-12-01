import { useEffect, useRef, useState } from "react";
import "./style/savedMelodys.css";
import SavedMelodyButton from "./SavedMelodyButton";
import { getMelodysNames } from "../../utils/fetchMelodys";

const SavedMelodysMenu = () => {
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
