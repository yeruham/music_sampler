import "./style/InstrumentsControl.css";
import InstrumentsInput from "./InstrumentsInput";
import type InstrumentsProps from "../../interfaces/InstrumentsProps";

function InstrumentsControl({ instruments, currentInstrument, setInstrument }: InstrumentsProps) {
  return (
      <InstrumentsInput
        currentInstrument={currentInstrument}
        instruments={instruments}
        setInstrument={setInstrument}
      ></InstrumentsInput>
  );
}

export default InstrumentsControl;
