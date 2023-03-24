import './currentInfo.css'
import wind from '../../images/wind.svg'
import hum from '../../images/hum.svg'
import rain from '../../images/rain.svg'

function CurrentInfo() {

  return(
    <section className='currentInfo'>
      <div className='currentInfo__info'>
        <p className='currentInfo__temperature'>27<span className='currentInfo__scale'>°C</span></p>
        <div className='currentInfo__data-info'>
          <h1 className='currentInfo__data'>17th Jun '21</h1>
          <h2 className='currentInfo__time'>Thrusday | 2:45 am</h2>
        </div>
      </div>
      <ul className='currentInfo__details'>
        <li className='currentInfo__detail'>
          <img src={wind} alt='Иконка ветра' className='currentInfo__icon'/>
          <p className='currentInfo__detail-info'>Wind 10 km/h</p>
        </li>
        <li className='currentInfo__detail'>
          <img src={hum} alt='Иконка видимости' className='currentInfo__icon'/>
          <p className='currentInfo__detail-info'>Hum 54 %</p>
        </li>
        <li className='currentInfo__detail'>
          <img src={rain} alt='Иконка дождя' className='currentInfo__icon'/>
          <p className='currentInfo__detail-info'>Rain 0.2 %</p>
        </li>
      </ul>
    </section>
  );

}

export default CurrentInfo;