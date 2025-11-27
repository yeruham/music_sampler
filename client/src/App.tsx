import "./App.css";
import { useEffect, useRef, useState } from "react";
import PlayController from "./components/PlayController";
import InstrumentsControl from "./components/InstrumentsControl";
import { getInstruments, getUrlsOfInstrument } from "./utils/fetchUrlsNotes"


function App() {

  const instruments = useRef<string[] | undefined>(undefined);
  const urlsByInstruments = useRef<{ [key: string]: { [key: string]: string } }>({});
  const [notesUrls, setNotesUrls] = useState<{ [key: string]: string } | undefined>();
  const [currentInstrument, setCurrentInstrument] = useState<string | undefined>();

  const loadInfo = async () => {
    instruments.current = await getInstruments();
    if (instruments.current){
      for (let i = 0; i < instruments.current.length; i++){
        const instrument = instruments.current![i];
        const urls = await getUrlsOfInstrument(instrument);
        if (urls){
          urlsByInstruments.current[instrument] = urls;
        }
      }
    }
  }

  useEffect(() => {
    loadInfo().then( () => {
      if (instruments.current && instruments.current.length > 0){
        const instrument = instruments.current![0];
        const notesUrls = urlsByInstruments.current[instrument];
        setNotesUrls(notesUrls);
        setCurrentInstrument(instrument);
      }
    }
    ).catch( (err) => {
      console.log("Error" + err);
    })
  }, [])

  useEffect(() => {
    if (currentInstrument && urlsByInstruments.current[currentInstrument]){
      const notesUrls = urlsByInstruments.current[currentInstrument];
      setNotesUrls(notesUrls);
    }
  }, [currentInstrument]);


  return (
    <>
    {(!currentInstrument || !notesUrls) && <p>Loading music notes</p>}
    { currentInstrument && notesUrls && 
    <>
      <div className="head">
        <h1>music sampler</h1>
       <InstrumentsControl
          instruments={instruments.current!}
          setInstrument={setCurrentInstrument}
        ></InstrumentsControl>
      </div>
      <PlayController urls={notesUrls}></PlayController>
      </>}
    </>
  );
}

export default App;