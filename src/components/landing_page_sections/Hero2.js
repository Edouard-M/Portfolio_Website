import React from 'react'
import SocialLinks from '../landing_page_components/SocialLinks'

function Hero2() {
  return (
    <div className='hero-main2'>
      <span className='hero-subtitle2'>Hi, my name is</span>
      <h1 className='hero-title2'>Edouard Mignien<span className='point'>.</span></h1>
      <div className='hero-subtitle-22'>I'm a 
        <section className="hero-animation2">
          <div className="first"><div>full-stack</div></div>
          <div className="second"><div>back-end</div></div>
        </section> Software Engineer</div>
      <button className='hero-button2'>Download Resume</button>
      <div className='hero-social2'><SocialLinks/></div>
    </div>
  )
}

export default Hero2
