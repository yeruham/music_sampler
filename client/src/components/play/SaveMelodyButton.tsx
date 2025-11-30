import { useContext, useState, useRef } from "react";
import { PlayContext, type Player } from "../PlayController";

const MELODY_URL = "http://localhost:3000/melodys";

const SaveMelodtButton = () => {
  const [isActive, setIsActive] = useState(false);
  const inputValue = useRef<string>("");
  const player = useContext(PlayContext) as Player;

  const saveCurrentMelody = () => {
    const melodyName = inputValue.current;
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
    console.log("saved");
    setIsActive(false);
  };

  return (
    <>
      {isActive ? (
        <>
          <input
            type="text"
            placeholder="melody name"
            onChange={(e) => (inputValue.current = e.target.value)}
          />
          <input type="submit" value="submit" onClick={saveCurrentMelody}/>
        </>
      ) : (
        <button
          className="save-melody-button"
          onClick={() => setIsActive(true)}
        >
          save
        </button>
      )}
    </>
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
