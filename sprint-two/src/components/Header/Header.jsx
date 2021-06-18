import React from 'react';
import { Link } from "react-router-dom";

// images
import logo from '../../assets/logo/Logo-brainflix.svg'
import UserPic from '../../assets/images/Mohan-muruge.jpg'
import searchIcon from '../../assets/icons/Icon-search.svg'

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
        <input className="header__search__input" placeholder={`${searchIcon} Search`} />
        <Link className="header__search__button__box" to="/upload">
          <button className="header__search__button">+ UPLOAD</button>
        </Link>

        <img className="header__search__image" src={UserPic} alt="User Pic" />
      </div>
    </header>
  )
}
export default Header;