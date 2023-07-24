import React, { useState, useEffect } from 'react';

import {AiOutlineHome} from 'react-icons/ai'
import {IoPersonOutline, IoDocumentTextOutline, IoCodeSlashSharp} from 'react-icons/io5'
import {BsLightbulb} from 'react-icons/bs'

function Navbar() {

  const section_init = window.location.hash.slice(1)

  const [activeSection, setActiveSection] = useState(section_init);

  const handleClick = (section) => {
    setActiveSection(section);
  };

  useEffect(() => {

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section');
      
      sections.forEach((section) => {
        const offset = 75;
        const sectionTop = section.offsetTop - offset; // Offset
        const sectionBottom = section.offsetTop + section.offsetHeight - offset; // Offset

        if ( scrollPosition >= sectionTop && scrollPosition < sectionBottom ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 
  return (
    <div>
      <nav className='navbar' id="navbar">
        <ul className='navbar-ul'>
          <li className='navbar-il'>
            <a href="#hero" onClick={() => handleClick('hero')} className="navbar-item" id={activeSection === 'hero' ? "active":""}> <div className='navbar-icon' ><AiOutlineHome/></div> <div className='navbar-text'><span>Home</span></div></a>
          </li>
          <li>
            <a href="#about" onClick={() => handleClick('about')} className="navbar-item" id={activeSection === 'about' ? "active":""}> <div className='navbar-icon'><IoPersonOutline/></div> <span className='navbar-text'>About</span></a>
          </li>
          <li>
            <a href="#skills" onClick={() => handleClick('skills')} className="navbar-item" id={activeSection === 'skills' ? "active":""}> <div className='navbar-icon'><IoCodeSlashSharp/></div> <span className='navbar-text'>Skills</span></a>
          </li>
          <li>
            <a href="#projects" onClick={() => handleClick('projects')} className="navbar-item" id={activeSection === 'projects' ? "active":""}> <div className='navbar-icon'><BsLightbulb/></div> <span className='navbar-text'>Projects</span></a>
          </li>
          <li>
            <a href="#experiences" onClick={() => handleClick('experiences')} className="navbar-item" id={activeSection === 'experiences' ? "active":""}> <div className='navbar-icon'><IoDocumentTextOutline/></div> <span className='navbar-text'>Resume</span></a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
