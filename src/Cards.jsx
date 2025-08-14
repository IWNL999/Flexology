import './App.css'
import fileIcon from './assets/file-icon.svg'
import fileIconWhite from './assets/file-icon-white.svg'
import camera from './assets/camera.svg'
import cameraWhite from './assets/camera-white.svg'
import microphone from './assets/microphone.svg'
import microphoneWhite from './assets/microphone-white.svg'
import { useTheme } from './ThemeContext'

function Cards() {
  const { theme } = useTheme()
  return (
    <div className="cards">
      <div className="cards-container">
        <div className="card-explanation">
            <img src={theme === 'light' ? fileIcon : fileIconWhite} alt="svg" />
            <h2>Текст в видео</h2>
            <p>Превращаем текст в захватывающее видео</p>
        </div>
        <div className="card-explanation">
            <img src={theme === 'light' ? microphone : microphoneWhite} alt="svg" />
            <h2>Автоозвучка</h2>
            <p>ИИ создаст голосовое сопровождение</p>
        </div>
        <div className="card-explanation">
            <img src={theme === 'light' ? camera : cameraWhite} alt="svg" />
            <h2>Готовые шаблоны</h2>
            <p>Библиотека профессиональных шаблонов</p>
        </div>
      </div>  
    </div>
  )
}

export default Cards
