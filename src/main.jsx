import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SmileCounter from './App.jsx'
import './styles/main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SmileCounter />
  </StrictMode>,
)
