import cyberpunkLogo from '../../assets/Cyberlogo.png'
import cdProjektLogo from '../../assets/Cdproj.png'
import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-content">
          <div className="footer-logos">
            <img src={cyberpunkLogo} alt="Cyberpunk 2077" />
            <img src={cdProjektLogo} alt="CD PROJEKT RED" />
          </div>

          <div className="footer-links">
            <a href="#license">Лицензия</a>
            <a href="#privacy">Политика конфиденциальности</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>CD PROJEKT®, Cyberpunk®, Cyberpunk 2077®</p>
      </div>
    </footer>
  )
}
