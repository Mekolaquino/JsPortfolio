import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
 
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skill I Have</h5>
      <h2>My Experience</h2>

      <div className="container expContainer">
        <div className="expFronend">
          <h3>Frontend Developer</h3>
          <div className="expContent">
            <article className='expDetail'>
              <BsPatchCheckFill className='expDetails-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Expeienced</small>
              </div>
            </article>
            <article className='expDetail'>
              <BsPatchCheckFill className='expDetails-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Expeienced</small>
              </div>
            </article>
            <article className='expDetail'>
              <BsPatchCheckFill className='expDetails-icon' />
              <div>
                <h4>REACT</h4>
                <small className='text-light'>Expeienced</small>
              </div>
            </article>
            <article className='expDetail'>
              <BsPatchCheckFill className='expDetails-icon' />
              <div>
                <h4>BOOTSRAP</h4>
                <small className='text-light'>Expeienced</small>
              </div>
            </article>
            <article className='expDetail'>
              <BsPatchCheckFill className='expDetails-icon' />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className='text-light'>Expeienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="expBackend">
        <h3>Backend Developer</h3>
          <div className="expContent">
            <article className='expDetail'>
              <BsPatchCheckFill className='expDetails-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Expeienced</small>
              </div>
            </article>
            <article className='expDetail'>
              <BsPatchCheckFill className='expDetails-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Expeienced</small>
              </div>
            </article>
            <article className='expDetail'>
              <BsPatchCheckFill className='expDetails-icon'  />
              <div>
                <h4>NODE JS</h4>
                <small className='text-light'>Expeienced</small>
              </div>
            </article>
            
          </div>
        </div>
      </div>

      
    </section>
  )
}

export default Experience