import NotesColumn from "./NotesColumn";

function AddNoteCulumn({ handleClick }: {  handleClick: () => void }){
    return (<button onClick={handleClick}>add new column</button>)
}

export default AddNoteCulumn;