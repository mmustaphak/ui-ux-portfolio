import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import Index from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
        <Route index element={<Index />}/>
        <Route path="about" element={<About />}/>
        <Route path="portfolio" element={<Portfolio />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
