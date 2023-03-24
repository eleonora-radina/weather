import rain from '../../images/rain.svg'
import './forecast.css'

function Forecast() {
  return (
    <section className='forecast'>
      <ul className='forecast__info'>
        <li className='forecast__card'>
          <p className='forecast__temperature'>24 °C</p>
          <img src={rain} alt='Иконка погода' className='forecast__icon'/>
          <p className='forecast__data'>Fri</p>
        </li>
        <li className='forecast__card'>
          <p className='forecast__temperature'>24 °C</p>
          <img src={rain} alt='Иконка погода' className='forecast__icon'/>
          <p className='forecast__data'>Fri</p>
        </li>
        <li className='forecast__card'>
          <p className='forecast__temperature'>24 °C</p>
          <img src={rain} alt='Иконка погода' className='forecast__icon'/>
          <p className='forecast__data'>Fri</p>
        </li>
        <li className='forecast__card'>
          <p className='forecast__temperature'>24 °C</p>
          <img src={rain} alt='Иконка погода' className='forecast__icon'/>
          <p className='forecast__data'>Fri</p>
        </li>
        <li className='forecast__card'>
          <p className='forecast__temperature'>24 °C</p>
          <img src={rain} alt='Иконка погода' className='forecast__icon'/>
          <p className='forecast__data'>Fri</p>
        </li>
        <li className='forecast__card'>
          <p className='forecast__temperature'>24 °C</p>
          <img src={rain} alt='Иконка погода' className='forecast__icon'/>
          <p className='forecast__data'>Fri</p>
        </li>
      </ul>
    </section>
  );
}

export default Forecast;