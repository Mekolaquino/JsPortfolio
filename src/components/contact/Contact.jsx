import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

export const contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contactContainer">
        <div className="contactOptions">
          <article className="contactOption">
            <MdOutlineEmail className='contactOptionIcon'/>
            <h4>Email</h4>
            <h5>aquinomelvim@gmail.com</h5>
            <a href="mailto:aquinomelvim@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contactOption">
            <RiMessengerLine className='contactOptionIcon'/>
            <h4>Messenger</h4>
            <h5>Melvin Aquino</h5>
            <a href="https://m.me/mekol.aquino" target="_blank">Send a message</a>
          </article>
          <article className="contactOption">
            <BsWhatsapp className='contactOptionIcon'/>
            <h4>Message/Call</h4>
            <h5>09214645908</h5>
            <a href="" target="_blank">Send a message</a>
          </article>

        </div>

        <form action="">
          <input type="text" name='name' placeholder='Full Name' required/>
          <input type="email" name='email' placeholder='Email Address' required/>
          <textarea name='message' rows="7" placeholder='Message here...' required></textarea>
          <button type='submit' className='btn btn-primary'>Send a message</button>
        </form>
      </div>
    </section >
  )
}

export default contact