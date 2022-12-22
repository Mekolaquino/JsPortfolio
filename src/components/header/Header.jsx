import React from 'react'
import './header.css'
import CTA from'./CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container headerContainer">
        <h5>hello Im </h5>
        <h1>Melvin Aquino</h1>
        <h5 className="text-ligth">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  )
}

export default Header