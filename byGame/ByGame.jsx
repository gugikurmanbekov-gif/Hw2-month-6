import gameBoxes from '../../assets/disks.png'
import diskIcon from '../../assets/dis.png'
import codeIcon from '../../assets/wysiwyg.png'
import bookIcon from '../../assets/collections.png'
import pcLogo from '../../assets/Frame 13.png'
import xboxLogo from '../../assets/xbox-one-3 logo.png'
import stadiaLogo from '../../assets/stadia logo.png'
import ps4Logo from '../../assets/Playstation logo.png'
import './byGame.css'

export default function ByGame() {
  return (
    <div className="buy-game">
      <div className="buy-left">
        <img src={gameBoxes} alt="Коробки с игрой Cyberpunk 2077" />
      </div>

      <div className="buy-right">
        <h2>Купить игру Cyberpunk 2077</h2>

        <h3>В комплект входит:</h3>
        <ul className="buy-list">
          <li>
            <img src={diskIcon} alt="" />
            <span>Футляр с игровыми дисками</span>
          </li>
          <li>
            <img src={codeIcon} alt="" />
            <span>Футляр с кодом для загрузки игры и дисками (pc)</span>
          </li>
          <li>
            <img src={bookIcon} alt="" />
            <span>Справочник с информацией об игровом мире</span>
          </li>
        </ul>

        <h3>Выберите платформу:</h3>
        <div className="platforms">
          <img src={pcLogo} alt="PC" />
          <img src={xboxLogo} alt="Xbox One" />
          <img src={stadiaLogo} alt="Stadia" />
          <img src={ps4Logo} alt="PS4" />
        </div>
      </div>
    </div>
  )
}
