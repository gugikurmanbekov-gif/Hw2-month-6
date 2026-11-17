import rectan1 from '../../assets/Rectangle62.png'
import rectan2 from '../../assets/Rectangle63.png'
import rectan3 from '../../assets/Rectangle61.png'
import './description.css'

export default function Description() {
  return (
    <div className="description">
      <section className="container">
        <h1>Найт-Сити изменит тебя навсегда!</h1>
        <p>
          <span>Cyberpunk 2077</span> — приключенческая ролевая игра, действие которой происходит в мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего. Ты играешь за V, наёмника в поисках устройства, позволяющего обрести бессмертие. Ты сможешь менять киберимпланты, навыки и стиль игры своего персонажа, исследуя открытый мир, где твои поступки влияют на ход сюжета и всё, что тебя окружает.
        </p>

        <div className="description-images">
          <div className="images-left">
            <img src={rectan1} alt="Найт-Сити улица" />
            <img src={rectan2} alt="Мотоцикл в Найт-Сити" />
          </div>
          <div className="images-right">
            <img src={rectan3} alt="Панорама Найт-Сити" />
          </div>
        </div>
      </section>
    </div>
  )
}

