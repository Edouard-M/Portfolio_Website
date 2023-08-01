import React from 'react'
import {BiLogoLinkedin, BiLogoGithub, BiLogoGmail} from 'react-icons/bi'
import { Link } from "react-router-dom";


function SocialLinks() {
  return (
    <div className='hero-social-2'>
        <Link to="https://www.linkedin.com/in/edouard-mignien/" target="_blank" className="hero-social2-card">
            <div className='hero-social2-icon'><BiLogoLinkedin/></div>
        </Link>
        <Link to="https://github.com/Edouard-M" target="_blank" className="hero-social2-card">
            <div className='hero-social2-icon'><BiLogoGithub/></div>
        </Link>
        <Link to="mailto:edouard.mignien@gmail.com" className="hero-social2-card">
            <div className='hero-social2-icon'><BiLogoGmail/></div>
        </Link>
    </div>
  )
}

export default SocialLinks