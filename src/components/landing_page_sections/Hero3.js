import React from 'react'
import {BiLogoLinkedin, BiLogoGithub, BiLogoGmail} from 'react-icons/bi'
import {Reveal} from '../animations/Reveal'

function Hero3() {
  return (
    <div id="hero-main" className="hero-main">
    <div className="home_left">
    <Reveal><span className='hero-subtitle'>Hi, my name is</span></Reveal>
      <Reveal><h1 className='home_left-title'>Edouard Mignien<span className='point'>.</span></h1></Reveal>
      <Reveal><div className='hero-subtitle-2'>I'm a 
        <section className="hero-animation">
          <div className="first"><div>full-stack</div></div>
          <div className="second"><div>back-end</div></div>
        </section> Software Engineer</div></Reveal>
    </div>

    <div className="home_right">
      <ul className="home_icon">
        <li>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>
            <i className="home_logo"><BiLogoLinkedin/></i>
          </span>
        </li>
        <li>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>
            <i className="home_logo"><BiLogoGithub/></i>
          </span>
        </li>
        <li>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>
            <i className="home_logo"><BiLogoGmail/></i>
          </span>
        </li>
      </ul>
    </div>
    <span className="heading">HOME</span>
  </div>
  )
}

export default Hero3
