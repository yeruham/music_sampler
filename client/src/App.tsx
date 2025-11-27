import "./App.css";
import { useEffect, useRef, useState } from "react";
import PlayController from "./components/PlayController";
import InstrumentsControl from "./components/InstrumentsControl";
import { getInstruments, getUrlsOfInstrument } from "./utils/fetchNotes"


function App() {

  const instruments = useRef<string[] | undefined>(undefined);
  const urlsByInstruments: { [key: string]: { [key: string]: string } } = {};

  useEffect(() => {
  loadnotesInfo().then( () => {
    if (instruments && instruments.current!.length > 0){
      const instrument = instruments.current![0];
      const urlsOfInstrument = urlsByInstruments[instrument];
      setUrls(urlsOfInstrument);
      setCurrentInstrument(instrument);
    }
  }
  ).catch(

  )
  }, [])

  const loadnotesInfo = async () => {
    instruments.current = await getInstruments();
    console.log(instruments);
    for (let i = 0; i < instruments.current!.length; i++){
      const instrument = instruments.current![i];
      const urls = await getUrlsOfInstrument(instrument);
      console.log(urls)
      if (urls){
        urlsByInstruments[instrument] = urls;
      }
    }
    console.log(urlsByInstruments);
  }




  const [urls, setUrls] = useState<{ [key: string]: string }>();

  const [currentInstrument, setCurrentInstrument] = useState<string | undefined>();

  useEffect(() => {
    if (currentInstrument && urlsByInstruments[currentInstrument]){
      const urlsOfInstrument = urlsByInstruments[currentInstrument];
      setUrls(urlsOfInstrument);
    }
  }, [currentInstrument]);


  return (
    <>
      <div className="head">
        <h1>music sampler</h1>
      { currentInstrument && urls &&  <InstrumentsControl
          instruments={instruments.current!}
          setInstrument={setCurrentInstrument}
        ></InstrumentsControl>}
      </div>
      {currentInstrument &&  urls &&  <PlayController urls={urls!}></PlayController>}
    </>
  );
}

export default App;



  const accordionUrls = {
    C5: "accordion/C5.wav",
    D5: "accordion/D5.wav",
    E5: "accordion/E5.wav",
    F5: "accordion/F5.wav",
    G5: "accordion/G5.wav",
    A5: "accordion/A5.wav",
    B5: "accordion/B5.wav",
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

  const guitarUrls = {
    C2: "guitar/C2.flac",
    D2: "guitar/D2.flac",
    E2: "guitar/E2.flac",
    F2: "guitar/F2.flac",
    G2: "guitar/G2.flac",
    A2: "guitar/A2.flac",
    B2: "guitar/B2.flac",
  };


   const instruments: { [key: string]: { [key: string]: string } } = {
    piano: pianoUrls,
    accordion: accordionUrls,
    guitar: guitarUrls,
  };
