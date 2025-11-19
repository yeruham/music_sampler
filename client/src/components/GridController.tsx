import { useState } from 'react';
import NotesGrid from './NotesGrid'
import AddNotesColumnButton from './AddNotesColumnButton';
import RempveNotesCulumnButton from './RempveNotesColumnButton';


function GridController({ musicalNotes } : { musicalNotes: string[] }){
    const [gridColumns, setGridColumns] = useState(3);
    const maxGridColumns = 12;

    return(<>
        <NotesGrid musicalNotes={musicalNotes} gridColumns={gridColumns}/>
        {gridColumns < maxGridColumns && <AddNotesColumnButton gridColumns={gridColumns} setGridColumns={setGridColumns}></AddNotesColumnButton>}
        <RempveNotesCulumnButton  gridColumns={gridColumns} setGridColumns={setGridColumns}></RempveNotesCulumnButton>
    </>)
}

export default GridController;