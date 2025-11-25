import "./App.css";
import { useEffect, useState } from "react";
import PlayController from "./components/PlayController";
import InstrumentsControl from "./components/InstrumentsControl";


function App() {

  const violinUrls = {
    A3: "A3vH.wav",
    B3: "B3vH.wav",
    C3: "C3vH.wav",
    D3: "D3vH.wav",
    F3: "F3vH.wav",
  }

  const pianoUrls = {
    B3: "B3vH.wav",
    C3: "C3vH.wav",
    D3: "D3vH.wav",
    F3: "F3vH.wav",
  }

  const trumpetUrls = {
    A3: "A3vH.wav",
    B3: "B3vH.wav",
    C3: "C3vH.wav",
  }

  const [urls, setUrls] = useState<{[key: string]: string}>(violinUrls)


  const instruments: {[key: string]: {[key: string]: string} } = {
    "violin": violinUrls,
    "trumpet": trumpetUrls,
    "piano": pianoUrls
  }

  const defultInstrument = "violin";
  const [currentInstrument, setCurrentInstrument] = useState(defultInstrument);

  useEffect(() => {
    if (instruments[currentInstrument]){
      const urlsOfInstrument = instruments[currentInstrument];
      setUrls(urlsOfInstrument);
    }
  }, [currentInstrument])


  return (
    <>
      <h1>music sampler</h1>
      <PlayController urls={urls}></PlayController>
      <InstrumentsControl instruments={Object.keys(instruments)} setInstrument={setCurrentInstrument}></InstrumentsControl>
    </>
  );
}

export default App;
