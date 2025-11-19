import NotesColumn from "./NotesColumn";

interface AddNoteCulumnProps{
  gridColumns: number,
  setGridColumns: React.Dispatch<React.SetStateAction<number>>,
  numColumnsToAdd?: number
}

function AddNotesColumnButton( {gridColumns, setGridColumns, numColumnsToAdd } : AddNoteCulumnProps ){
    if (!numColumnsToAdd){
        numColumnsToAdd = 1;
    }
    const handleClick = () => {
        setGridColumns(gridColumns =>  gridColumns + numColumnsToAdd)
    }
    return (<button onClick={handleClick}>add new column</button>)
}

export default AddNotesColumnButton;