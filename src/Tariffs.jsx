import './App.css'
import check from './assets/check.svg'

function Tariffs() {
  return (
      <div className="tariffs">
        <h1>Выберите тариф</h1>
        <p>Расширяйте возможности генерации контента</p>
        <div className="tariffs-container">

          <div className="card-tariff">
              <h2>Бесплатный</h2>
              <div className="price">
                <h3>$0</h3>
                <p>/мес</p>
              </div>
              <div className="advantage">
                <img src={check} alt="check" />
                <p>До 5 видео в месяц</p>
              </div>
              <div className="advantage adv-2">
                <img src={check} alt="check" />
                <p>Базовые шаблоны</p>
              </div>
              <button>Текущий план</button>
          </div>

          <div className="card-tariff card-tariff-2">
              <h2>PRO</h2>
              <div className="price">
                <h3>$9</h3>
                <p>/мес</p>
              </div>
              <div className="advantage">
                <img src={check} alt="check" />
                <p>До 50 видео в месяц</p>
              </div>
              <div className="advantage adv-2">
                <img src={check} alt="check" />
                <p>Базовые шаблоны</p>
              </div>
              <div className="advantage adv-2">
                <img src={check} alt="check" />
                <p>HD качество</p>
              </div>
              <button>Купить</button>
          </div>

          <div className="card-tariff card-tariff-2">
              <h2>PREMIUM</h2>
              <div className="price">
                <h3>$29</h3>
                <p>/мес</p>
              </div>
              <div className="advantage">
                <img src={check} alt="check" />
                <p>Безлимитная генерация</p>
              </div>
              <div className="advantage adv-2">
                <img src={check} alt="check" />
                <p>Полная автоматизация</p>
              </div>
              <div className="advantage adv-2">
                <img src={check} alt="check" />
                <p>HD качество</p>
              </div>
              <button>Купить</button>
          </div>
        </div>  
      </div>
    )
}

export default Tariffs
