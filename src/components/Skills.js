import React, { useState } from 'react'

import {IoLogoPython} from 'react-icons/io5'
import {SiDjango, SiTestcafe} from 'react-icons/si'
import {BiLogoPostgresql} from 'react-icons/bi'
import {TbApi} from 'react-icons/tb'
import {GiTestTubes} from 'react-icons/gi'


function logoPython(){
  return (<div className='icone-python'><IoLogoPython/></div>)
}

function logoDjango(){
  return (<div className='icone-django'><SiDjango/></div>)
}

function logoPostgre(){
  return (<div className='icone-postgre'><BiLogoPostgresql/></div>)
}

function logoPytest(){
  return (<div className='icone-pytest'><SiTestcafe/></div>)
}

function logoApi(){
  return (<div className='icone-api'><TbApi/></div>)
}

function logoSQLAlchemy(){
  return (<div className='icone-sqlalchemy'><GiTestTubes/></div>)
}





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
            <div className='skills-card-icone'>{logoPython()}</div>
            <span className='skills-card-text'>Python</span>
          </div>
          <div className='skills-card'>
            <div className='skills-card-icone'>{logoDjango()}</div>
            <span className='skills-card-text'>Django</span>
          </div>
          <div className='skills-card'>
            <div className='skills-card-icone'>{logoPostgre()}</div>
            <span className='skills-card-text'>PostgreSQL</span>
          </div>
        </div>
        <div className='skills-cards-row-2'>
          <div className='skills-card'>
            <div className='skills-card-icone'>{logoPytest()}</div>
            <span className='skills-card-text'>Pytest & Mcoks</span>
          </div>
          <div className='skills-card'>
            <div className='skills-card-icone'>{logoApi()}</div>
            <span className='skills-card-text'>REST API</span>
          </div>
          <div className='skills-card'>
            <div className='skills-card-icone'>{logoSQLAlchemy()}</div>
            <span className='skills-card-text'>SQLalchemy</span>
          </div>
        </div>
      </div>
      <div className='skills-icones-container'></div>
    </div>
  )
}

export default Skills
