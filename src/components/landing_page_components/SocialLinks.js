import React from 'react'
import {BiLogoLinkedin, BiLogoGithub, BiLogoGmail} from 'react-icons/bi'
import { Link } from "react-router-dom";


function SocialLinks() {
  return (
    <div className='hero-social'>
        <Link to="https://www.linkedin.com/in/edouard-mignien/" target="_blank" className="hero-social-link">
            <div className='hero-social-icon'><BiLogoLinkedin/></div>
        </Link>
        <Link to="https://github.com/Edouard-M" target="_blank" className="hero-social-link">
            <div className='hero-social-icon'><BiLogoGithub/></div>
        </Link>
        <Link to="" target="_blank" className="hero-social-link">
            <div className='hero-social-icon'><BiLogoGmail/></div>
        </Link>
    </div>
  )
}

export default SocialLinks