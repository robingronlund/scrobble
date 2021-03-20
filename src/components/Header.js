import React from 'react'
import { Link } from "@reach/router";

import '../styles/Header.css'
import Logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header className="header-main">
      <Link to="/" className="header-main__logo">
        <img className="header-main__logo--image" src={Logo} alt=""/>
        <span className="header-main__logo--text">Soundtrack<span className="header-main__logo--text__lighten"> your brand</span></span>
      </Link>
    </header>
  )
}

export default Header
