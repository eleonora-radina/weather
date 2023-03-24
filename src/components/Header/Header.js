import './header.css'
import Search from '../Search/Search';
import Scale from '../Scale/Scale';

function Header(props) {
  return (
    <header className='header'>
          <Search /> 
          <Scale />
    </header>
  )
}

export default Header;
