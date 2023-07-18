import React from 'react'

import {FaReact, FaHtml5, FaCss3Alt} from 'react-icons/fa'
import {DiResponsive} from 'react-icons/di'
import {RiJavascriptFill} from 'react-icons/ri'


function logo1(){
    return (<div className='icone-python'><RiJavascriptFill/></div>)
  }
  
  function logo2(){
    return (<div className='icone-django'><FaReact/></div>)
  }
  
  function logo3(){
    return (<div className='icone-postgre'><FaHtml5/></div>)
  }
  
  function logo4(){
    return (<div className='icone-pytest'><FaCss3Alt/></div>)
  }
  
  function logo5(){
    return (<div className='icone-api'><DiResponsive/></div>)
  }
  


function CardsFrontEnd() {
  return (
    <div>
      <div className='skills-cards-row-1'>
          <div className='skills-card'>
            <div className='skills-card-icone'>{logo1()}</div>
            <span className='skills-card-text'>JavaScript</span>
          </div>
          <div className='skills-card'>
            <div className='skills-card-icone'>{logo2()}</div>
            <span className='skills-card-text'>React</span>
          </div>
          <div className='skills-card'>
            <div className='skills-card-icone'>{logo3()}</div>
            <span className='skills-card-text'>HTML</span>
          </div>
        </div>
        <div className='skills-cards-row-2'>
          <div className='skills-card'>
            <div className='skills-card-icone'>{logo4()}</div>
            <span className='skills-card-text'>CSS</span>
          </div>
          <div className='skills-card'>
            <div className='skills-card-icone'>{logo5()}</div>
            <span className='skills-card-text'>Responsive Design</span>
          </div>
        </div>
    </div>
  )
}

export default CardsFrontEnd
