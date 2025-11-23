import { type ChangeNumCulumnProps } from "../../interfaces/ChangeNumCulumnProps";

function AddNotesColumnButton( {gridColumns, setGridColumns, numColumnsToAdd } : ChangeNumCulumnProps ){
    if (!numColumnsToAdd){
        numColumnsToAdd = 1;
    }
    const handleClick = () => {
        setGridColumns(gridColumns =>  gridColumns + numColumnsToAdd)
    }
    return (<button onClick={handleClick} className="change-num-columns-button">add new column</button>)
}

export default AddNotesColumnButton;