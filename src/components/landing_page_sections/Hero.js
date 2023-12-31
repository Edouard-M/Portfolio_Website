import React from 'react'
import {BiLogoLinkedin, BiLogoGithub, BiLogoGmail} from 'react-icons/bi'
import {Reveal} from '../animations/Reveal'
import { Link } from "react-router-dom";

function Hero({data}) {
  return (
    <div id="hero-main" className="hero-main">
    <div className="home_left">
    <Reveal><span className='hero-subtitle'>{data.hello}</span></Reveal>
      <Reveal><h1 className='home_left-title'>{data.name}<span className='point'>.</span></h1></Reveal>
      <Reveal><div className='hero-subtitle-2'>{data.title1} 
        <section className="hero-animation">
          <div className="first"><div>full stack</div></div>
          <div className="second"><div>back end</div></div>
        </section>{data.title2} </div></Reveal>
    </div>

    <div className="home_right">
      <ul className="home_icon">
        <li>
          <Link to="https://www.linkedin.com/in/edouard-mignien/" target="_blank">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>
            <i className="home_logo"><BiLogoLinkedin/></i>
          </span>
          </Link>
        </li>
        <li>
          <Link to="https://github.com/Edouard-M" target="_blank">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>
            <i className="home_logo"><BiLogoGithub/></i>
          </span>
          </Link>
        </li>
        <li>
          <Link to="mailto:edouard.mignien@gmail.com">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>
            <i className="home_logo"><BiLogoGmail/></i>
          </span>
          </Link>
        </li>
      </ul>
    </div>
    <span className="home_click_me_1">click me</span>
    <span className="home_click_me_2">click me</span>
    <span className="home_click_me_3">click me</span>
    <span className="heading">EDOUARD</span>
  </div>
  )
}

export default Hero
