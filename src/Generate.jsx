import './App.css'

function Generate() {
  return (
    <div className="generate">
        <h1>Создайте свое первое видео</h1>
        <p>Опишите идею, а ИИ создаст для вас уникальный контент</p>
        <div className="generate-container">
            <textarea 
                className="generate-input" 
                placeholder="Опишите сюжет видео..." 
                id='generate-input'
            />
            <button>Сгенерировать</button>
        </div>  
    </div>
  )
}

export default Generate
