import React, { useState } from 'react'

import CardsBackEnd from './cards/CardsBackEnd'
import CardsFrontEnd from './cards/CardsFrontEnd'
import CardsSoftSkills from './cards/CardsSoftSkills'
import IconesList from './IconesList'


function Skills() {

  const [activeButton, setActiveButton] = useState(0)

  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
  };


  return (
    <div className='skills-main'>
      <h2>SKILLS</h2>
      <div className='skills-subtitle'>
        <span>My technical environment </span>
      </div>
      <div className='skills-buttons-container'>
        <button className='skills-button-left' id={activeButton === 0 ? "active":""} onClick={() => handleClick(0)}>Back End</button>
        <button className='skills-button-mid' id={activeButton === 1 ? "active":""} onClick={() => handleClick(1)}>Front End</button>
        <button className='skills-button-right' id={activeButton === 2 ? "active":""} onClick={() => handleClick(2)}>Soft Skills</button>
      </div>
      <div className='skills-cards-container'>
        <div className='skills-cards-isActive' id={activeButton === 0 ? "active":""}><CardsBackEnd/></div>
        <div className='skills-cards-isActive' id={activeButton === 1 ? "active":""}><CardsFrontEnd/></div>
        <div className='skills-cards-isActive' id={activeButton === 2 ? "active":""}><CardsSoftSkills/></div>
      </div>
      <div className='skills-icones-container'>
        <div className='skills-icones-list-move1'>
          <IconesList/>
        </div>
        <div className='skills-icones-list-move2'>
          <IconesList/>
        </div>
      </div>
    </div>
  )
}

export default Skills
