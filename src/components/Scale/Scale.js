import { useState } from 'react';
import './scale.css';

function Scale(props) {
  const [isCelsius, setIsCelsius ] = useState('');

  function handleSwitchClick() {
    setIsCelsius(!isCelsius);
  }
  
  return (
    <label className='scale' htmlFor="switch" onClick={handleSwitchClick}>
      <input type="checkbox" className={`scale__input ${isCelsius ? 'scale__input_on' : ''}`} />
    </label>
  )
}

export default Scale;
