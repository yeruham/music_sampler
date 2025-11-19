import NotesColumn from "./NotesColumn";

interface RemoveNoteCulumnProps{
  gridColumns: number,
  setGridColumns: React.Dispatch<React.SetStateAction<number>>,
  numColumnsToRemove?: number
}

function RempveNotesCulumnButton( {gridColumns, setGridColumns, numColumnsToRemove } : RemoveNoteCulumnProps ){
    if (!numColumnsToRemove){
        numColumnsToRemove = 1;
    }
    const handleClick = () => {
        setGridColumns(gridColumns =>  gridColumns - numColumnsToRemove)
    }
    return (<button onClick={handleClick}>remove last column</button>)
}

export default RempveNotesCulumnButton;