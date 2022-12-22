import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footerLogo'>Melvin</a>

     <ul className="permalink">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experince</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
     </ul>

     <div className="footerSocials">
      <a href="https://facebook.com"><FaFacebookF/></a>
      <a href="https://instagram.com"><FiInstagram/></a>
      <a href="https://twitter.com"><IoLogoTwitter/></a>
     </div>

     <div className="footerCopyright">
      <small>&copy, MelvinAquino. All rights reserved.</small>
     </div>
    </footer>
  )
}

export default Footer