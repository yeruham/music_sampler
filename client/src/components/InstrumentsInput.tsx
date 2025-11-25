import type InstrumentsProps from "../interfaces/InstrumentsProps";

function InstrumentsInput({ instruments, setInstrument }: InstrumentsProps){

    const changeInstrument = (instrument: string) => {
        setInstrument(instrument);
    }

    return (<select onChange={(e) => changeInstrument(e.target.value)}>
        {Object.keys(instruments).map((instrument, index) => {
            return (<option key={index}>{instrument}</option>)
        })}
    </select>)
}

export default InstrumentsInput;