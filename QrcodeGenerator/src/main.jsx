import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Qrcode.css'
import App from './App.jsx'
import { Qrcode } from './Qrcode.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Qrcode />
  </StrictMode>,
)
