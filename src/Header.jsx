// Header.jsx
import './App.css';
import { useState } from 'react';
import Login from './Login';
import Registration from './Registration';
import logo from './assets/logo.png'
import ThemeSwitch from './assets/ThemeSwitch'

function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  

  return (
    <>
      {/* Основной хедер */}
      <div className="header">
        <div className="header-container">
          <div className="header-left">
          <img src={logo} alt="svg" className='logo'/>
          <p className="project-name">Flexology</p>
          </div>
          <div className="header-right">
            <button className="login-button" onClick={() => setIsLoginOpen(true)}>
              Войти
            </button>
            <button className="trial-button" 
              onClick={() => setIsRegisterOpen(true)}>
              Попробовать бесплатно
            </button>
            
            <ThemeSwitch />
            
          </div>
        </div>
      </div>

      {/* Модальные окна */}
      <Login
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSwitchToRegister={() => {
          setIsLoginOpen(false);
          setIsRegisterOpen(true);
        }}
      />
      <Registration
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onSwitchToLogin={() => {
          setIsRegisterOpen(false);
          setIsLoginOpen(true);
        }}
      />
    </>
  );
}

export default Header;