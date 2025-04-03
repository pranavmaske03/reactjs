import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './compenents/Home.jsx'
import { createBrowserRouter,Route,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import BatchDetails from './compenents/batchdetails.component.jsx'
import NotFoundPage from './compenents/NotFoundPage.jsx'
import BatchList from './compenents/batchlist.component.jsx'


// const router = createBrowserRouter ([
//   {
//     path: '/',
//     element: <Home/>,
//     errorElement: <NotFoundPage/>
//   },
//   {
//     path: 'batch-detail',
//     element: <BatchDetails />
//   },
//   {
//     path: 'batch-list',
//     element: <BatchList/>
//   }
// ])

const router = createBrowserRouter (
  createRoutesFromElements (
    <>
      <Route path='/' element={ <Home/> } errorElement={ <NotFoundPage/> } />
      <Route path='batch-detail' element={ <BatchDetails/> }/>
      <Route path='batch-list' element={ <BatchList/> }/>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)