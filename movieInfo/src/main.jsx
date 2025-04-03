import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import MovieContextProvider from './context/MovieContextProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieContextProvider>
      <App/>
    </MovieContextProvider>
  </StrictMode>,
)
