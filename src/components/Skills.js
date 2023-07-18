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


  function cards(){
    if(activeButton === 0)
      return <CardsBackEnd/>
    else if(activeButton === 1)
      return <CardsFrontEnd/>
    else
      return <CardsSoftSkills/>
  }


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
        {cards()}
      </div>
      <div className='skills-icones-container'>
        <IconesList/>
      </div>
    </div>
  )
}

export default Skills
