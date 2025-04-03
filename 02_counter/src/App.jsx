import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(1)

  let addValue = () => {
    if(counter < 20) {
      counter++;
      setCounter(counter);
    }
  }

  let removeValue = () => {
    if(counter > 0) {
      counter--;
      setCounter(counter);
    }
  }
  
  return (
    <>
      <h1>Demonstration of HOOKS</h1>
      <h1>Counter value: {counter}</h1>
      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
