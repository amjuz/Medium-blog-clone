import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter} from 'react-router-dom'
import { Navbar } from './compnents/Navbar.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
)
