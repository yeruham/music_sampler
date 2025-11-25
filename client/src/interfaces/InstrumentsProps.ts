export default interface InstrumentsProps {
  instruments: { [key: string]: string };
  setInstrument: React.Dispatch<React.SetStateAction<string>>;
}