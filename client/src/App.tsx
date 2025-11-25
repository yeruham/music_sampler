import "./App.css";
import { useState } from "react";
import PlayController from "./components/PlayController";
import InstrumentsControl from "./components/InstrumentsControl";


function App() {
  const [urls, setUrls] = useState({
    A3: "A3vH.wav",
    B3: "B3vH.wav",
    C3: "C3vH.wav",
    D3: "D3vH.wav",
    F3: "F3vH.wav",
  })

  const instruments = {
    "violin": "violin",
    "trumpet": "trumpet",
    "piano": "piano"
  }

  const [currentInstrument, setCurrentInstrument] = useState("piano");
  console.log(currentInstrument);

  return (
    <>
      <h1>music sampler</h1>
      <PlayController urls={urls}></PlayController>
      <InstrumentsControl instruments={instruments} setInstrument={setCurrentInstrument}></InstrumentsControl>
    </>
  );
}

export default App;
