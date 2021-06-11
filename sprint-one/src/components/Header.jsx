import logo from '../assets/logo/Logo-brainflix.svg'
import icon from '../assets/icons/Icon-search.svg'
function Header(){  
  return (
    <header className="header">  
    <nav className= "header__logo">
      <img src={logo} alt="logo header"/>
    </nav>   
        <div>
            <input className="search" placeholder="Search" />
            <button onClick>+upload</button>
        </div>
    </header>
  )
}
export default Header;