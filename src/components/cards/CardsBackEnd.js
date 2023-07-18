import React from 'react'

import {IoLogoPython} from 'react-icons/io5'
import {SiDjango, SiTestcafe} from 'react-icons/si'
import {BiLogoPostgresql} from 'react-icons/bi'
import {TbApi} from 'react-icons/tb'
import {GiTestTubes} from 'react-icons/gi'


function logo1(){
    return (<div className='icone-python'><IoLogoPython/></div>)
  }
  
  function logo2(){
    return (<div className='icone-django'><SiDjango/></div>)
  }
  
  function logo3(){
    return (<div className='icone-postgre'><BiLogoPostgresql/></div>)
  }
  
  function logo4(){
    return (<div className='icone-pytest'><SiTestcafe/></div>)
  }
  
  function logo5(){
    return (<div className='icone-api'><TbApi/></div>)
  }
  
  function logo6(){
    return (<div className='icone-sqlalchemy'><GiTestTubes/></div>)
  }


function CardsBackEnd() {
  return (
    <div>
      <div className='skills-cards-row-1'>
          <div className='skills-card'>
            <div className='skills-card-icone'>{logo1()}</div>
            <span className='skills-card-text'>Python</span>
          </div>
          <div className='skills-card'>
            <div className='skills-card-icone'>{logo2()}</div>
            <span className='skills-card-text'>Django</span>
          </div>
          <div className='skills-card'>
            <div className='skills-card-icone'>{logo3()}</div>
            <span className='skills-card-text'>PostgreSQL</span>
          </div>
        </div>
        <div className='skills-cards-row-2'>
          <div className='skills-card'>
            <div className='skills-card-icone'>{logo4()}</div>
            <span className='skills-card-text'>Pytest & Mcoks</span>
          </div>
          <div className='skills-card'>
            <div className='skills-card-icone'>{logo5()}</div>
            <span className='skills-card-text'>REST API</span>
          </div>
          <div className='skills-card'>
            <div className='skills-card-icone'>{logo6()}</div>
            <span className='skills-card-text'>SQLalchemy</span>
          </div>
        </div>
    </div>
  )
}

export default CardsBackEnd
