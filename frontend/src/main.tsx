import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter} from 'react-router-dom'
import { Navbar } from './compnents/Navbar.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar/>
        <App />
      </div>
    </BrowserRouter>
  
)
