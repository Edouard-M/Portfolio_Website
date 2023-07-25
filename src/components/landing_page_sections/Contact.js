import React from 'react'
import {Reveal} from '../animations/Reveal'

function Contact() {
  return (
    <div>
      <div className='center'><Reveal><h2>Contact me<span className='point'>.</span></h2></Reveal></div>
      <a href="mailto:edouard.mignien@gmail.com" className='contact-button'>Send me an Email</a>
    </div>
  )
}

export default Contact
