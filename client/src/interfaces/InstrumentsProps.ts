export default interface InstrumentsProps {
  instruments: string[];
  currentInstrument: string;
  setInstrument: React.Dispatch<React.SetStateAction<string | undefined>>;
  setMelodyNotes: React.Dispatch<React.SetStateAction<string[][] | undefined>>;
}