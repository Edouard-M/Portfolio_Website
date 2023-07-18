import React, { useState, useEffect } from 'react';

import {AiOutlineHome} from 'react-icons/ai'
import {IoPersonOutline, IoFolderOutline, IoDocumentTextOutline, IoCodeSlashSharp} from 'react-icons/io5'

function Navbar() {

  const section_init = window.location.hash.slice(1)

  const [activeSection, setActiveSection] = useState(section_init);

  useEffect(() => {
    //window.location.hash = activeSection;
  }, [activeSection]);


  const handleClick = (section) => {
    setActiveSection(section);
  };

  useEffect(() => {

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section');
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop - 50 && // Offset
          scrollPosition < sectionTop + sectionHeight - 50 // Offset
        ) {
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
            <a href="#home" onClick={() => handleClick('home')} className="navbar-item" id={activeSection === 'home' ? "active":""}> <div className='navbar-icon' ><AiOutlineHome/></div> <div className='navbar-text'><span>Home</span></div></a>
          </li>
          <li>
            <a href="#about" onClick={() => handleClick('about')} className="navbar-item" id={activeSection === 'about' ? "active":""}> <div className='navbar-icon'><IoPersonOutline/></div> <span className='navbar-text'>About</span></a>
          </li>
          <li>
            <a href="#skills" onClick={() => handleClick('skills')} className="navbar-item" id={activeSection === 'skills' ? "active":""}> <div className='navbar-icon'><IoCodeSlashSharp/></div> <span className='navbar-text'>Skills</span></a>
          </li>
          <li>
            <a href="#projects" onClick={() => handleClick('projects')} className="navbar-item" id={activeSection === 'projects' ? "active":""}> <div className='navbar-icon'><IoFolderOutline/></div> <span className='navbar-text'>Projects</span></a>
          </li>
          <li>
            <a href="#resume" onClick={() => handleClick('resume')} className="navbar-item" id={activeSection === 'resume' ? "active":""}> <div className='navbar-icon'><IoDocumentTextOutline/></div> <span className='navbar-text'>Resume</span></a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
