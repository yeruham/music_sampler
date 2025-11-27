export default interface InstrumentsProps {
  instruments: string[];
  setInstrument: React.Dispatch<React.SetStateAction<string | undefined>>;
}