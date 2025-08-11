import './App.css'
import { useTheme } from './ThemeContext';

function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="header">
      <div className="header-container">
        <p className="project-name">Flexology</p>

        <div className="header-right">
          <button className="login-button">Войти</button>
          <button className="trial-button">Попробовать бесплатно</button>
          <button onClick={toggleTheme}>
            Сменить тему ({theme})
          </button>
        </div>
      </div>
    </div>
  )
}


export default Header
