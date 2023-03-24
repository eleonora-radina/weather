import { useState } from 'react';
import './search.css'
import locationIcon from '../../images/map.svg';

function Search(props) {
  const [city, setCity] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleSearchChange(e) {
    setCity(e.target.value);
  }

  return (
    <div className='search'>
      <form className='search__form' onSubmit={handleSubmit} noValidate>
        <img src={locationIcon} alt='Иконка локации' className='search__icon'/>
        <input 
          className='search__input'
          type='text'
          name='text'
          placeholder="Поиск города"
          required
          autoComplete="off"
          onChange={handleSearchChange}
          value={city || 'Samara, Russia'}
        />
        <button className='search__button' type='submit' aria-label='Поиск' />
      </form>

    </div>
  )
}

export default Search;

