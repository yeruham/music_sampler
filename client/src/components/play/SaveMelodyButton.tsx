import { useContext } from "react";
import { PlayContext, type Player } from "../PlayController";
import dotenv from "dotenv";

dotenv.config();


const SaveMelodtButton = () => {
  const player = useContext(PlayContext) as Player;
  const melodysUrl = process.env.MELODYS_URL ||  "http://localhost:3000/melodys";
  const melodyName = "";

  const saveCurrentMelody = () => {
    fetch(melodysUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: melodyName,
        instrument: player?.instrument,
        melody: player?.melodyNotes,
      }),
    }).catch((err) => {
      console.log(`Error: cannot save melody ${melodyName}. ` + err);
    });
  };

  return <button className="save-melody-button" onClick={saveCurrentMelody}>save</button>;
};

export default SaveMelodtButton;
