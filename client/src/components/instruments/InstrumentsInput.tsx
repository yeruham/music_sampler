import type InstrumentsProps from "../../interfaces/InstrumentsProps";

function InstrumentsInput({ instruments, currentInstrument, setInstrument }: InstrumentsProps) {
  const changeInstrument = (instrument: string) => {
    setInstrument(instrument);
  };

  return (
    <select
      value={currentInstrument}
      className="select-instrument"
      onChange={(e) => changeInstrument(e.target.value)}
    >
      {instruments.map((instrument, index) => {
        return (
          <option key={index} className="instrument-option">
            {instrument}
          </option>
        );
      })}
    </select>
  );
}

export default InstrumentsInput;
