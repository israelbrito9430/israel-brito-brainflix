import logo from '../assets/logo/Logo-brainflix.svg'
import icon from '../assets/icons/Icon-search.svg'
import UserPic from '../assets/images/Mohan-muruge.jpg'
import SearchIcon from '../assets/icons/Icon-search.svg'

function Header(){  
  return (
    <header className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}> 
      <div className="header__logo">
        <img src={logo} alt="logo header"/>
      </div>
      <div>
        <input className="search" placeholder="Search" />
        <button onClick>+upload</button>
        <img src={UserPic} alt="User Pic" style={{ width: '60px', borderRadius: '50%', height: '50px' }} />
      </div>

      {/* <nav className= "header__logo"></nav>   
      <div>
          <img src={logo} alt="logo header"/>
          <input className="search" placeholder="Search" />
      </div>
      <div>
          <button onClick>+upload</button>
      </div>
      <div>
        <img src={UserPic} alt="User Pic" />
      </div> */}
    </header>
  )
}
export default Header;