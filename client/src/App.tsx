
import { useState } from 'react';
import './App.css'
import NotesGrid from './components/NotesGrid'
import AddNotesCulumnButton from './components/AddNotesCulumnButton';


function App() {

  const [gridColumns, setGridColumns] = useState(3);
  const musicalNotes = ["A3vH.wav", "B3vH.wav", "C3vH.wav", "D3vH.wav", "F3vH.wav"];


  return (<>
    <NotesGrid musicalNotes={musicalNotes} gridColumns={gridColumns}/>
    <AddNotesCulumnButton gridColumns={gridColumns} setGridColumns={setGridColumns}></AddNotesCulumnButton>
  </> )
}

export default App
