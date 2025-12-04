import "./style/InstrumentsControl.css";
import InstrumentsInput from "./InstrumentsInput";
import type InstrumentsProps from "../../interfaces/InstrumentsProps";

function InstrumentsControl({ instruments, currentInstrument, setInstrument, setMelodyNotes }: InstrumentsProps) {
  return (
      <InstrumentsInput
        setMelodyNotes={setMelodyNotes}
        currentInstrument={currentInstrument}
        instruments={instruments}
        setInstrument={setInstrument}
      ></InstrumentsInput>
  );
}

export default InstrumentsControl;
