import './App.css'
import './components/PlayController'
import PlayController from './components/PlayController';


function App() {

  const urls = {A3: "A3vH.wav", B3: "B3vH.wav", C3: "C3vH.wav", D3: "D3vH.wav", F3: "F3vH.wav"}

  return (<>
    <h1>music sampler</h1>
    <PlayController urls={urls}></PlayController>
  </> )
}

export default App
