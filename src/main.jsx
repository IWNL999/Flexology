import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Header from './Header.jsx'
import Preview from './Preview.jsx'
import Cards from './Cards.jsx'
import Generate from './Generate.jsx'
import Tariffs from './Tariffs.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Preview />
    <Cards />
    <Generate />
    <Tariffs />
    <Footer />
  </StrictMode>,
)
