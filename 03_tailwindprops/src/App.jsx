import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card';

function App() {
  
  let myObj = {
    username: "pranav",
    age: 21,
  }
  return (
    <>
      <h1 className='bg-green-400 text'>Tailwind Test</h1>
      <Card username="pranav" age="21"/>
    </>
  )
}

export default App
