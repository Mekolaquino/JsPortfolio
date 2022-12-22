import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
 
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know </h5>
      <h2>About me</h2>

       <div className='container aboutContainer'>
        <div className='aboutMe'>
          <div className='aboutMeImage'>
            <img src={ME} alt="About Image" />

          </div>
        </div>

          <div className='aboutContent'>
            <div className="aboutCards">
              <article className='aboutCard'>
                  <FaAward className='aboutIcon'/>
                  <h5>Experience</h5>
                  <small>1+ Years Working</small>
              </article>

              <article className='aboutCard'>
                  <FiUsers className='aboutIcon'/>
                  <h5>Clients</h5>
                  <small>200+ Worldwide</small>
              </article>

              <article className='aboutCard'>
                  <VscFolderLibrary className='aboutIcon'/>
                  <h5>Projects</h5>
                  <small>80+ Complete</small>
              </article>
            </div>

            <p>Hi! I'm Melvin G. Aquino, 21 years old. I'm currently residing in Sucat Muntinlupa City. I graduated Senior High school year 2020 in Informatics College Northgate in Alabang wherein I studied Computer Programming. I experienced a lot of Non-IT related jobs including warehouse man and Helper. The reason why I wanna pursue Full stack web development is because I wanna use my knowledge and improve my skills so I can apply for an IT related job</p>

            <a href="#contacts" className='btn btn-primary'>Let's Talk</a>

          </div>

        

      </div> 



    </section>
  )
}

export default About