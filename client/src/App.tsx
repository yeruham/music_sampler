import './App.css'
import GridController from './components/GridController';


function App() {


  const musicalNotes = ["A3vH.wav", "B3vH.wav", "C3vH.wav", "D3vH.wav", "F3vH.wav"];


  return (<>
    <h1>music sampler</h1>
    <GridController musicalNotes={musicalNotes}></GridController>
  </> )
}

export default App
