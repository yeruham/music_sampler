import './App.css'
import NotesGrid from './components/NotesGrid'

function App() {

  const musicalNotes = ["A3vH.wav", "B3vH.wav", "C3vH.wav", "D3vH.wav", "F3vH.wav"];
  const gridColumns = 3;

  return (<NotesGrid musicalNotes={musicalNotes} gridColumns={gridColumns}/>)
}

export default App
