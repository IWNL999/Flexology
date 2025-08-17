import { useState } from 'react';
import './App.css';

function Login() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="login-button" onClick={() => setIsOpen(true)}>
        Войти
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
            <form className="form">
              <p className="form-title">Sign in to your account</p>
              <div className="input-container">
                <input placeholder="Enter email" type="email" />
              </div>
              <div className="input-container">
                <input placeholder="Enter password" type="password" />
              </div>
              <button className="submit" type="submit">Sign in</button>
              <p className="signup-link">
                No account? <a href="">Sign up</a>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
