import bg from '../../assets/11.jpg';
import './banner.css';

export default function Banner() {
  return (
    <section className="banner">
<img src={bg} alt="bg" />
<div className='link'>
<h2>Доступно на всех платформах</h2>
<button>Узнать больше</button>
</div>
    </section>
  )
}
