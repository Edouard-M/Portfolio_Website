import React from 'react'

import {FaReact, FaHtml5, FaCss3Alt} from 'react-icons/fa'
import {RiJavascriptFill, RiDatabase2Fill} from 'react-icons/ri'
import {IoLogoPython} from 'react-icons/io5'
import {SiDjango, SiThreedotjs, SiTestcafe} from 'react-icons/si'
import {BiLogoPostgresql} from 'react-icons/bi'
import {TbApi} from 'react-icons/tb'


function Skills() {
  return (
    <div className='skills-container'>
        <div className='skills-back-column'>
            <h2 className='skills-h2'>Back-end Skills<span className='point'>.</span></h2>
            <div className='skills-icones-container'>
                <div className='skills-icones-row'>
                    <div className='skills-icone-container'><div className='skills-icone'><IoLogoPython color='#018476'/></div><span className='skills-icone-text'>Python</span></div>
                    <div className='skills-icone-container'><div className='skills-icone'><SiDjango color='#44B78B'/></div><span className='skills-icone-text'>Django</span></div>
                    <div className='skills-icone-container'><div className='skills-icone'><BiLogoPostgresql color='#336791'/></div><span className='skills-icone-text'>PostgreSQL</span></div>
                </div>
                <div className='skills-icones-row'>
                    <div className='skills-icone-container'><div className='skills-icone'><SiTestcafe color='#E9A072'/></div><span className='skills-icone-text'>Pytest</span></div>
                    <div className='skills-icone-container'><div className='skills-icone'><TbApi color='#E9A072'/></div><span className='skills-icone-text'>REST API</span></div>
                    <div className='skills-icone-container'><div className='skills-icone'><RiDatabase2Fill color='#E9A072'/></div><span className='skills-icone-text'>SQLalchemy</span></div>
                </div>
            </div>
        </div>
        <div className='skills-front-column'>
            <h2 className='skills-h2'>Front-end Skills<span className='point'>.</span></h2>
            <div className='skills-icones-container'>
                <div className='skills-icones-row'>
                    <div className='skills-icone-container'><div className='skills-icone'><RiJavascriptFill color='#E7D24C'/></div><span className='skills-icone-text'>JavaScript</span></div>
                    <div className='skills-icone-container'><div className='skills-icone'><FaReact color='#00D8FF'/></div><span className='skills-icone-text'>React.js</span></div>
                    <div className='skills-icone-container'><div className='skills-icone'><SiThreedotjs color='#3F3F3F'/></div><span className='skills-icone-text'>Three.js</span></div>
                </div>
                <div className='skills-icones-row'>
                    <div className='skills-icone-container'><div className='skills-icone'><FaHtml5 color='#F1662A'/></div><span className='skills-icone-text'>HTML</span></div>
                    <div className='skills-icone-container'><div className='skills-icone'><FaCss3Alt color='#1572B6'/></div><span className='skills-icone-text'>CSS</span></div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
