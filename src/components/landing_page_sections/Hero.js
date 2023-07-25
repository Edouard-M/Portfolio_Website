import React from 'react'
import SocialLinks from '../landing_page_components/SocialLinks'
import {Reveal} from '../animations/Reveal'


function Hero() {
  return (
    <div className='hero-main'>
      <Reveal><span className='hero-subtitle'>Hi, my name is</span></Reveal>
      <Reveal><h1 className='hero-title'>Edouard Mignien<span className='point'>.</span></h1></Reveal>
      <Reveal><div className='hero-subtitle-2'>I'm a 
        <section className="hero-animation">
          <div className="first"><div>full-stack</div></div>
          <div className="second"><div>back-end</div></div>
        </section> Software Engineer</div></Reveal>
      <Reveal><div className='hero-social'><SocialLinks/></div></Reveal>
      <button className='hero-button'>Download Resume</button>
    </div>
  )
}

export default Hero
