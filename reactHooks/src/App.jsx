import { useState } from 'react'
import Counter from './useRef/Counter'
import DomManipulation from './useRef/DomManipulation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Demonstrations of useRef hook</h1>
      <DomManipulation/>
    </>
  )
}

export default App
