import logo from '../../assets/Cyberpunk_2077_Logo1.png'
import social from '../../assets/Group107.png'
import './header.css';

export default function Header() {
  return (
    <header className='header_cont'>
        <img src={logo} alt="" />
        <img src={social} alt="" />
    </header>
  )
}
