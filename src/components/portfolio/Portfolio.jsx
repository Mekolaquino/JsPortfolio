import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolioContainer">
        <article className="portfolioItem">
          <div className="portfolioItemImage">
            <img src={IMG1} alt="" />
          </div>
            <h3>title</h3>
            <div className="portfolioItemCta">
              <a href="https://github.com" className='btn'>github</a>
              <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className="portfolioItem">
          <div className="portfolioItemImage">
            <img src={IMG2} alt="" />
          </div>
            <h3>title</h3>
            <div className="portfolioItemCta">
              <a href="https://github.com" className='btn'>github</a>
              <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className="portfolioItem">
          <div className="portfolioItemImage">
            <img src={IMG3} alt="" />
          </div>
            <h3>title</h3>
            <div className="portfolioItemCta">
              <a href="https://github.com" className='btn'>github</a>
              <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className="portfolioItem">
          <div className="portfolioItemImage">
            <img src={IMG4} alt="" />
          </div>
            <h3>title</h3>
            <div className="portfolioItemCta">
              <a href="https://github.com" className='btn'>github</a>
              <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className="portfolioItem">
          <div className="portfolioItemImage">
            <img src={IMG5} alt="" />
          </div>
            <h3>title</h3>
            <div className="portfolioItemCta">
              <a href="https://github.com" className='btn'>github</a>
              <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className="portfolioItem">
          <div className="portfolioItemImage">
            <img src={IMG6} alt="" />
          </div>
            <h3>title</h3>
            <div className="portfolioItemCta">
              <a href="https://github.com" className='btn'>github</a>
              <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio