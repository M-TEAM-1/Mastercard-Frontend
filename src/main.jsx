import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import './index.css';


createRoot(document.getElementById('root')).render(
  <StrictMode className="">
    <Navbar />
  </StrictMode>,
)
