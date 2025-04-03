import MovieDetails from "./components/MovieDetails"
import SearchBar from "./components/SearchBar"
import { createBrowserRouter,RouterProvider } from "react-router-dom"

function App() {

  const router = createBrowserRouter([

    { path: "/", element: <SearchBar/> },
    { path: "/movie-details", element: <MovieDetails/>}
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
