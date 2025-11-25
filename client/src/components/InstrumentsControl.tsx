import "./style/InstrumentsControl.css";
import InstrumentsInput from "./InstrumentsInput";
import type InstrumentsProps from "../interfaces/InstrumentsProps";

function InstrumentsControl({ instruments, setInstrument }: InstrumentsProps) {
  return (
      <InstrumentsInput
        instruments={instruments}
        setInstrument={setInstrument}
      ></InstrumentsInput>
  );
}

export default InstrumentsControl;
