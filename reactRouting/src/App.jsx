import { useState } from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './compenents/Home'


function App() {

  return (
    <>
      <h1>Demonstration of Routing</h1>
      <Router>
        <nav>
          <Link to='/'>Home</Link>
        </nav>
      </Router>

      <Routes>
        <Route path='/' element={ <Home/> } />  
      </Routes>
    </>
  )
}

export default App
