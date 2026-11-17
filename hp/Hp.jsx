import monitorImg from '../../assets/c066117431.png'
import logosImg from '../../assets/Group6767.png'
import paletteIcon from '../../assets/paint.png'
import starsIcon from '../../assets/paint2.png'
import layersIcon from '../../assets/paint3.png'
import './hp.css'

export default function Hp() {
  return (
    <div className="hp-section">
      <section className="container hp-content">
        <div className="hp-left">
          <img src={monitorImg} alt="Монитор HP" className="hp-monitor" />
          <img src={logosImg} alt="HP x Cyberpunk 2077" className="hp-logos" />
        </div>

        <div className="hp-right">
          <h2>Полное погружение вместе с HP</h2>
          <p>
            Погрузись в современные экшен-игры с реалистичным изображением с помощью монитора с диагональю 23,8 дюйма, созданном для отображения максимально насыщенных цветов. Успевай реагировать на любые события с временем отклика 1 мс и частотой в 144 Гц!
          </p>

          <ul className="hp-features">
            <li>
              <img src={paletteIcon} alt="" />
              <span>Яркие насыщенные цвета</span>
            </li>
            <li>
              <img src={starsIcon} alt="" />
              <span>Кристальная четкость изображения</span>
            </li>
            <li>
              <img src={layersIcon} alt="" />
              <span>Быстрые движения и плавный геймплей</span>
            </li>
          </ul>

          <button className="hp-btn">Подробнее</button>
        </div>
      </section>
    </div>
  )
}
