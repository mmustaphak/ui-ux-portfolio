import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<h1 className='text-black'>Hello World & UI/UX Portfolio Project</h1>}/>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
