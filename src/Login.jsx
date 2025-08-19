import './App.css';

function Login({ isOpen, onClose, onSwitchToRegister }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
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