import Navbar from './components/Navbar'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MovieDetails from './pages/MovieDetails'
import MovieContextProvider from './context/MovieContextProvider'

function App() {
  const router = createBrowserRouter([
      {path: '/', element: <Home/>},
      {path: '/movie/:id', element: <MovieDetails/>},
  ])
  
  return (
    <>
      <Navbar/>
      <RouterProvider router={router} />
    </>
  )
}

export default App
