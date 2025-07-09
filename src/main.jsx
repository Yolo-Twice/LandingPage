import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AboutUs from './components/aboutUs'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router'
import Career from './components/career.jsx'

const router = createBrowserRouter([
  {path:"/",element:<App/>},
  {path:"/career",element:<Career/>},
  {path: "/about-us",element: <AboutUs />}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router}/>
  </StrictMode>,
)
