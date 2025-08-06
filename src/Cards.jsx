import './App.css'
import fileIcon from './assets/file-icon.svg'
import camera from './assets/camera.svg'
import microphone from './assets/microphone.svg'

function Cards() {
  return (
    <div className="cards">
      <div className="cards-container">
        <div className="card-explanation">
            <img src={fileIcon} alt="svg" />
            <h2>Текст в видео</h2>
            <p>Превращаем текст в захватывающее видео</p>
        </div>
        <div className="card-explanation">
            <img src={microphone} alt="svg" />
            <h2>Автоозвучка</h2>
            <p>ИИ создаст голосовое сопровождение</p>
        </div>
        <div className="card-explanation">
            <img src={camera} alt="svg" />
            <h2>Готовые шаблоны</h2>
            <p>Библиотека профессиональных шаблонов</p>
        </div>
      </div>  
    </div>
  )
}

export default Cards
