import { useContext, useState, useRef } from "react";
import { PlayContext, type Player } from "../PlayController";
import "./style/saveMelody.css";

const MELODY_URL = "http://localhost:3000/melodys";

const SaveMelodtButton = () => {
  const [isActive, setIsActive] = useState(false);
  const inputValue = useRef<string>("");
  const player = useContext(PlayContext) as Player;

  const saveCurrentMelody = () => {
    const melodyName = inputValue.current;
    if (melodyName != "") {
      const reqBody = JSON.stringify({
        name: melodyName,
        instrument: player?.instrument,
        melody: player?.melodyNotes,
      });
      fetch(MELODY_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: reqBody,
      }).catch((err) => {
        console.log(`Error: cannot save melody ${melodyName}. ` + err);
      });
      restartButoon();
    }
  };

  const restartButoon = () => {
    inputValue.current = "";
    setIsActive(false);
  };

  return (
    <div className="save-melody-conatiner">
      {isActive ? (
        <>
          <input
            type="text"
            placeholder="melody name"
            className="save-melody-input-text"
            onChange={(e) => (inputValue.current = e.target.value)}
          />
          <div className="save-melody-buttons">
            <input
              type="submit"
              value="save"
              onClick={saveCurrentMelody}
              className="save-melody-button"
            />
            <input
              type="submit"
              value="cancel"
              onClick={restartButoon}
              className="save-melody-button"
            />
          </div>
        </>
      ) : (
        <button
          className="save-melody-button"
          onClick={() => setIsActive(true)}
        >
          save
        </button>
      )}
    </div>
  );
};

export default SaveMelodtButton;

// (  <>
//     {isActive ? (
// <form action={saveCurrentMelody}>
//   <label>melody name:</label>
//   <input type="text" />
//   <input type="submit" value="Submit" />
// </form>
//     ) : (
// <button className="save-melody-button" onClick={() => setIsActive(true)}>save</button>
//     )}
//   </>);
