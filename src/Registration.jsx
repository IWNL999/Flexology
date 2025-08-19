import './App.css';

function Registration({ isOpen, onClose, onSwitchToLogin }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
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