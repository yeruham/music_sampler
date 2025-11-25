import "./App.css";
import { useEffect, useState } from "react";
import PlayController from "./components/PlayController";
import InstrumentsControl from "./components/InstrumentsControl";

function App() {
  const violinUrls = {
    C6: "piano/c6.mp3",
    D6: "piano/d6.mp3",
    E6: "piano/e6.mp3",
    F6: "piano/f6.mp3",
    G6: "piano/g6.mp3",
  };

  const pianoUrls = {
     C6: "piano/c6.mp3",
    D6: "piano/d6.mp3",
    E6: "piano/e6.mp3",
    F6: "piano/f6.mp3",
    G6: "piano/g6.mp3",
    A6: "piano/a6.mp3",
    B6: "piano/b6.mp3",
  };

  const trumpetUrls = {
    B6: "piano/b6.mp3",
    C6: "piano/c6.mp3",
    D6: "piano/d6.mp3",
    F6: "piano/f6.mp3",
  };

  const [urls, setUrls] = useState<{ [key: string]: string }>(pianoUrls);

  const instruments: { [key: string]: { [key: string]: string } } = {
    piano: pianoUrls,
    violin: violinUrls,
    trumpet: trumpetUrls,
  };

  const defultInstrument = "piano";
  const [currentInstrument, setCurrentInstrument] = useState(defultInstrument);

  useEffect(() => {
    if (instruments[currentInstrument]) {
      const urlsOfInstrument = instruments[currentInstrument];
      setUrls(urlsOfInstrument);
    }
  }, [currentInstrument]);

  return (
    <>
      <div className="head">
        <h1>music sampler</h1>
        <InstrumentsControl
          instruments={Object.keys(instruments)}
          setInstrument={setCurrentInstrument}
        ></InstrumentsControl>
      </div>
      <PlayController urls={urls}></PlayController>
    </>
  );
}

export default App;
