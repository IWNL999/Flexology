import './App.css'

function Preview() {
  return (
    <div className="preview">
        <div className="preview-container">
            <div className="preview-left">
                <h1 className='generate-virus'>Генерируйте  вирусные ВК клипы за минуту</h1> 
                <h2 className='generate-virus-2'>AI создаст видео из текста - просто редактируйте и загружайте!</h2>
                <button className='preview-generate'>Начать генерацию</button>
            </div> 
        <div className="preview-right">
            <div className="preview-card">
              <div className="preview-icon">▶</div>
              <p className="preview-text">Превью AI-видео</p>
            </div>
        </div>
      </div>
    </div>
  )
}


export default Preview
