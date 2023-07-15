import React from 'react'

import {AiOutlineHome} from 'react-icons/ai'
import {IoPersonOutline, IoFolderOutline, IoDocumentTextOutline} from 'react-icons/io5'

function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <ul className='navbar-ul'>
          <li className='navbar-il'>
            <a href="#home" class="navbar-item"> <div className='navbar-icon'><AiOutlineHome/></div> <div className='navbar-text'><span>Home</span></div></a>
          </li>
          <li>
            <a href="#about" class="navbar-item"> <div className='navbar-icon'><IoPersonOutline/></div> <span className='navbar-text'>About</span></a>
          </li>
          <li>
            <a href="#projects" class="navbar-item"> <div className='navbar-icon'><IoFolderOutline/></div> <span className='navbar-text'>Projects</span></a>
          </li>
          <li>
            <a href="#resume" class="navbar-item"> <div className='navbar-icon'><IoDocumentTextOutline/></div> <span className='navbar-text'>Resume</span></a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
