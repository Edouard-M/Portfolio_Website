import React from 'react'
import {BiLogoLinkedin, BiLogoGithub, BiLogoGmail} from 'react-icons/bi'
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer id="footer">
        <div className='footer-name'>Edouard Mignien</div>
        <div className='footer-social'>
          <Link to="https://www.linkedin.com/in/edouard-mignien/" target="_blank" className="footer-social-link">
              <div className='footer-social-icon'><BiLogoLinkedin/></div>
          </Link>
          <Link to="https://github.com/Edouard-M" target="_blank" className="footer-social-link">
              <div className='footer-social-icon'><BiLogoGithub/></div>
          </Link>
          <a href="mailto:edouard.mignien@gmail.com" className="footer-social-link">
              <div className='footer-social-icon'><BiLogoGmail/></div>
          </a>
        </div>
        <div className='footer-credits'> Created with React.js</div>
        <div className='footer-credits'> Developed and Designed by Edouard Mignien</div>
    </footer>
  )
}

export default Footer
