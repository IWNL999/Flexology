import './App.css';
import LoadingSpinner from './assets/LoadingSpinner';
import { useState } from 'react';

function Generate() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  };

  return (
    <div className="generate" id="generate-section">
      <h1>Создайте свое первое видео</h1>
      <p>Опишите идею, а ИИ создаст для вас уникальный контент</p>
      <div className="generate-container">
        <textarea
          className="generate-input"
          placeholder="Опишите сюжет видео..."
          id="generate-input"
        />
        <button
          onClick={handleGenerate}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="loading-content">
              <span>Загрузка...</span>
              <LoadingSpinner />
            </div>
          ) : (
            'Сгенерировать'
          )}
        </button>
      </div>
    </div>
  );
}

export default Generate;