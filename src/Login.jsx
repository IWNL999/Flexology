import './App.css';
import { useState } from 'react';

function Login({ isOpen, onClose, onSwitchToRegister }) {
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsExiting(false);
      onClose();
    }, 200);
  };

 
  if (!isOpen && !isExiting) return null;

  return (
    <div
      className="modal-overlay"
      onClick={handleClose}
    >
      <div
        className={`modal ${isExiting ? 'modal-exit' : 'modal-enter'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <form className="form">
          <p className="form-title">Войти в аккаунт</p>
          <div className="input-container">
            <input placeholder="Введите почту" type="email" />
          </div>
          <div className="input-container">
            <input placeholder="Введите пароль" type="password" />
          </div>
          <button className="submit" type="submit">Войти</button>
          <p className="signup-link">
            Нет аккаунта?
            <button
              type="button"
              onClick={onSwitchToRegister}
            >
              Создайте
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;