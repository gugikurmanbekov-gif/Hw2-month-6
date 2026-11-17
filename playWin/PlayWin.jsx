import promoBadge from '../../assets/Group215.png'
import consolesImg from '../../assets/Group217.png'
import './playWin.css'

export default function PlayWin() {
  return (
    <div className="play-win">
      <section className="container">
        <div className="play-win-header">
          <img src={promoBadge} alt="акция" />
          <h2>Играй и выигрывай!</h2>
        </div>

        <p className="play-win-desc">
          Играй в <span>Cyberpunk 2077</span> и получи возможность выиграть консоль <span>Xbox Series X</span> или <span>Sony PlayStation 5</span>! Заполни форму ниже и приложи скриншот о покупке игры. Итоги розыгрыша будут подведены 1 февраля. Удачи! ;)
        </p>

        <div className="play-win-content">
          <form className="play-win-form">
            <input type="text" placeholder="Как тебя зовут?" />
            <input type="email" placeholder="Твой e-mail" />

            <label className="file-upload">
              <input type="file" />
              <span>Прикрепить скриншот</span>
              <small>.png / .jpg / .pdf</small>
            </label>

            <button type="submit">Отправить</button>

            <label className="checkbox-label">
              <input type="checkbox" defaultChecked />
              <span>Согласен на обработку персональных данных</span>
            </label>
          </form>

          <img src={consolesImg} alt="Консоли" className="consoles-img" />
        </div>
      </section>
    </div>
  )
}

