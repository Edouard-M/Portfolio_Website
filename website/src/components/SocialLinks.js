import React from 'react'
import {BiLogoLinkedin, BiLogoGithub, BiLogoGmail} from 'react-icons/bi'
import { Link } from "react-router-dom";


function SocialLinks() {
  return (
    <div className='home-left-social-links'>
        <Link to="https://www.linkedin.com/in/edouard-mignien/" target="_blank" className="home-social-link">
            <div className='home-social-circle-color'><div className='home-social-circle-blank'><div className='home-social-icon'><BiLogoLinkedin/></div></div></div>
        </Link>
        <Link to="https://github.com/Edouard-M" target="_blank" className="home-social-link">
            <div className='home-social-circle-color'><div className='home-social-circle-blank'><div className='home-social-icon'><BiLogoGithub/></div></div></div>
        </Link>
        <Link to="" target="_blank" className="home-social-link">
            <div className='home-social-circle-color'><div className='home-social-circle-blank'><div className='home-social-icon'><BiLogoGmail/></div></div></div>
        </Link>
    </div>
  )
}

export default SocialLinks
