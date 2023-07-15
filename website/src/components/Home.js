import React from 'react'
import {BiLogoLinkedin, BiLogoGithub, BiLogoGmail} from 'react-icons/bi'
import {FaCircleArrowDown} from 'react-icons/fa6'
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className='home-main'>
        <div className='home-mid'>
            <div className='home-left'>
                <div className='home-content-left'>
                    <h1 className='home-name'> Edouard Mignien</h1>
                    <div className='home-me'>
                        I'm a 
                        <section className="home-animation">
                            <div className="first"><div>full-stack</div></div>
                            <div className="second"><div>back-end</div></div>
                        </section>
                        Software Engineer
                    </div>
                    <div>

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

                    </div>
                </div>
            </div>
            <div className='home-right'>
                <div className='home-content-right'>
                    <div className='home-right-circle_1'>
                        <div className='home-right-circle'><img src={require("../assets/Me_circle.png")} className="home-photo" alt='Edouard'></img></div>
                    </div>
                </div>
            </div>
        </div>
        <div className='home-arrow'>
            <a href="#about"><div className='home-arrow-icon'><FaCircleArrowDown/></div></a>
        </div>
    </div>
  )
}

export default Home
