import './App.css';
import { useState } from 'react';

function Registration({ isOpen, onClose, onSwitchToLogin }) {
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
          <p className="form-title">Создать аккаунт</p>
          <div className="input-container">
            <input placeholder="Введите почту" type="email" />
          </div>
          <div className="input-container">
            <input placeholder="Введите пароль" type="password" />
            <input placeholder="Повторите пароль" type="password" />
          </div>
          <button className="submit" type="submit">Создать</button>
          <p className="signup-link">
            Уже есть аккаунт?
            <button
              type="button"
              onClick={onSwitchToLogin}
            >
              Войдите
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Registration;