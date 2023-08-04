import React from 'react'
import {Reveal} from '../animations/Reveal'

function Contact({data}) {
  return (
    <div>
      <div className='center'><Reveal><h2>{data.section}<span className='point'>.</span></h2></Reveal></div>
      <a href="mailto:edouard.mignien@gmail.com" className='contact-button'>{data.button}</a>
    </div>
  )
}

export default Contact
