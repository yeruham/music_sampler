
import { useState } from 'react';
import './App.css'
import NotesGrid from './components/NotesGrid'
import AddNoteCulumn from './components/AddNoteCulumn';

function App() {

  const [gridColumns, setGridColumns] = useState(3);
  const musicalNotes = ["A3vH.wav", "B3vH.wav", "C3vH.wav", "D3vH.wav", "F3vH.wav"];


  return (<>
    <NotesGrid musicalNotes={musicalNotes} gridColumns={gridColumns}/>
    <AddNoteCulumn handleClick={() => setGridColumns(gridColumns + 1)}></AddNoteCulumn>
  </> )
}

export default App
