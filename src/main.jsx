import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import Header from './Header.jsx';
import Preview from './Preview.jsx';
import Cards from './Cards.jsx';
import Generate from './Generate.jsx';
import Tariffs from './Tariffs.jsx';
import Footer from './Footer.jsx';
import { ThemeProvider } from './ThemeContext';
import * as VKID from '@vkid/sdk';

// Функция для генерации codeVerifier (для PKCE, 43-128 символов)
function generateCodeVerifier(length = 128) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
  let verifier = '';
  for (let i = 0; i < length; i++) {
    verifier += charset[Math.floor(Math.random() * charset.length)];
  }
  return verifier;
}

// Функция для генерации state (случайная строка для безопасности)
function generateState(length = 16) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let state = '';
  for (let i = 0; i < length; i++) {
    state += charset[Math.floor(Math.random() * charset.length)];
  }
  return state;
}

// Инициализация VK ID SDK
function initializeVKID() {
  const APP_ID = import.meta.env.VITE_VK_APP_ID || '54207359';
  const codeVerifier = generateCodeVerifier();
  const state = generateState();

  VKID.Config.init({
    app: APP_ID,
    redirectUrl: 'https://inventionless-mai-cyano.ngrok-free.dev', // Твой ngrok URL
    state: state,
    codeVerifier: codeVerifier,
    scope: 'email phone',
  });
}

// Компонент-обёртка для инициализации и обработки редиректа
function App() {
  useEffect(() => {
    initializeVKID();

    // Обработка редиректа после VK авторизации
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');
    if (code) {
      console.log('VK Auth Code:', code, 'State:', state);
      // Здесь можно отправить code на бэк для обмена на token (пока просто лог)
      // Очисти URL от параметров
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  return (
    <ThemeProvider>
      <Header />
      <Preview />
      <Cards />
      <Generate />
      <Tariffs />
      <Footer />
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);