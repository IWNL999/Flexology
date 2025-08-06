import './App.css'

function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <p className="project-name">Flexology</p>

        <div className="header-right">
          <button className="login-button">Войти</button>
          <button className="trial-button">Попробовать бесплатно</button>
        </div>
      </div>
    </div>
  )
}


export default Header
