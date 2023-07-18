import React from 'react'

import {RiTeamFill} from 'react-icons/ri'
import {MdOutlineSpeakerNotes} from 'react-icons/md'
import {FaPuzzlePiece} from 'react-icons/fa'
import {TbArrowsExchange2} from 'react-icons/tb'


function logo1(){
    return (<div className='icone-python'><RiTeamFill/></div>)
  }
  
  function logo2(){
    return (<div className='icone-django'><MdOutlineSpeakerNotes/></div>)
  }
  
  function logo3(){
    return (<div className='icone-api'><FaPuzzlePiece/></div>)
  }
  
  function logo4(){
    return (<div className='icone-sqlalchemy'><TbArrowsExchange2/></div>)
  }


function CardsSoftSkills() {
  return (
    <div>
      <div className='skills-cards-row-1'>
          <div className='skills-card'>
            <div className='skills-card-icone'>{logo1()}</div>
            <span className='skills-card-text'>Team Working</span>
          </div>
          <div className='skills-card'>
            <div className='skills-card-icone'>{logo2()}</div>
            <span className='skills-card-text'>Communication</span>
          </div>
        </div>
        <div className='skills-cards-row-2'>
          <div className='skills-card'>
            <div className='skills-card-icone'>{logo3()}</div>
            <span className='skills-card-text'>Problem Solving</span>
          </div>
          <div className='skills-card'>
            <div className='skills-card-icone'>{logo4()}</div>
            <span className='skills-card-text'>Adaptability</span>
          </div>
        </div>
    </div>
  )
}
export default CardsSoftSkills
