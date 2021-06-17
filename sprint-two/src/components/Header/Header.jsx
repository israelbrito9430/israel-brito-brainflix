import React from 'react';
import {Link} from "react-router-dom";

// images
import logo from '../../assets/logo/Logo-brainflix.svg'
import UserPic from '../../assets/images/Mohan-muruge.jpg'

// style
import './Header.scss'

function Header() {
  return (
    <header className="header" >
      <Link to="/home">
        <div className="header__logo" >
          <img src={logo} alt="logo header" />
        </div>
      </Link>

      <div className="header__search">
        <input className="search" placeholder="Search" />
        <Link to="/upload" className="search--button">
          <span>+ UPLOAD</span>
        </Link>
        
        <img className="search--image" src={UserPic} alt="User Pic" style={{ width: '60px', borderRadius: '50%', height: '50px' }} />
      </div>
    </header>
  )
}
export default Header;