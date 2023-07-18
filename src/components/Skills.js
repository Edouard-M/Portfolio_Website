import React, { useState } from 'react'

function Skills() {

  const [activeButton, setActiveButton] = useState(0)

  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
  };


  return (
    <div className='skills-main'>
      <h2>SKILLS</h2>
      <div className='skills-buttons-container'>
        <button className='skills-button-left' id={activeButton === 0 ? "active":""} onClick={() => handleClick(0)}>Back End</button>
        <button className='skills-button-mid' id={activeButton === 1 ? "active":""} onClick={() => handleClick(1)}>Front End</button>
        <button className='skills-button-right' id={activeButton === 2 ? "active":""} onClick={() => handleClick(2)}>Soft Skills</button>
      </div>
      <div className='skills-cards-container'>
        <div className='skills-cards-row-1'>
          <div className='skills-card'>
            <div className='skills-card-icone'>icone</div>
            <span className='skills-card-text'>Python</span>
          </div>
          <div className='skills-card'>
            <div className='skills-card-icone'>icone</div>
            <span className='skills-card-text'>Django</span>
          </div>
          <div className='skills-card'>
            <div className='skills-card-icone'>icone</div>
            <span className='skills-card-text'>PostgreSQL</span>
          </div>
        </div>
        <div className='skills-cards-row-2'>
          <div className='skills-card'>
            <div className='skills-card-icone'>icone</div>
            <span className='skills-card-text'>Pytest & Mcoks</span>
          </div>
          <div className='skills-card'>
            <div className='skills-card-icone'>icone</div>
            <span className='skills-card-text'>REST API</span>
          </div>
          <div className='skills-card'>
            <div className='skills-card-icone'>icone</div>
            <span className='skills-card-text'>SQLalchemy</span>
          </div>
        </div>
      </div>
      <div className='skills-icones-container'></div>
    </div>
  )
}

export default Skills
