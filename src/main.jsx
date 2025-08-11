import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Header from './Header.jsx'
import Preview from './Preview.jsx'
import Cards from './Cards.jsx'
import Generate from './Generate.jsx'
import Tariffs from './Tariffs.jsx'
import Footer from './Footer.jsx'
import { ThemeProvider } from './ThemeContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Header />
      <Preview />
      <Cards />
      <Generate />
      <Tariffs />
      <Footer />
      </ThemeProvider>,
  </StrictMode>
  
)
