import "./style/InstrumentsControl.css";
import InstrumentsInput from "./InstrumentsInput";
import type InstrumentsProps from "../interfaces/InstrumentsProps";

function InstrumentsControl({ instruments, setInstrument }: InstrumentsProps) {
  // const instruments = ["a", "b", "c"];
  return (
      <InstrumentsInput
        instruments={instruments}
        setInstrument={setInstrument}
      ></InstrumentsInput>
  );
}

export default InstrumentsControl;
