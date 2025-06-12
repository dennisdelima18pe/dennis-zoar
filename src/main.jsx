import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Historia from './Historia.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<App />} />
        <Route path="/nossa-historia" element={<Historia />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
