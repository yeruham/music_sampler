import NotesColumn from "./NotesColumn";
import { type ChangeNumCulumnProps } from "../interfaces/ChangeNumCulumnProps";

function RempveNotesCulumnButton( {gridColumns, setGridColumns, numColumnsToRemove } : ChangeNumCulumnProps ){
    if (!numColumnsToRemove){
        numColumnsToRemove = 1;
    }
    const handleClick = () => {
        setGridColumns(gridColumns =>  gridColumns - numColumnsToRemove)
    }
    return (<button onClick={handleClick} className="change-num-columns-button">remove last column</button>)
}

export default RempveNotesCulumnButton;