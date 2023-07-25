import React from 'react'

import {FaReact, FaHtml5, FaCss3Alt} from 'react-icons/fa'
import {RiJavascriptFill, RiDatabase2Fill} from 'react-icons/ri'
import {IoLogoPython} from 'react-icons/io5'
import {SiDjango, SiThreedotjs, SiTestcafe} from 'react-icons/si'
import {BiLogoPostgresql} from 'react-icons/bi'
import {TbApi} from 'react-icons/tb'
import {Reveal} from '../animations/Reveal'


function Skills() {
  return (
    <div className='skills-container'>
        <div className='skills-back-column'>
            <div className='center'><Reveal className="test"><h2 className='skills-h2'>Back-end Skills<span className='point'>.</span></h2></Reveal></div>
            <div className='skills-icones-container'>
                <div className='skills-icones-row'>
                    <div className='skills-icone-container'><div className='skills-icone'><IoLogoPython color='#018476'/></div><Reveal><span className='skills-icone-text'>Python</span></Reveal></div>
                    <div className='skills-icone-container'><div className='skills-icone'><SiDjango color='#44B78B'/></div><Reveal><span className='skills-icone-text'>Django</span></Reveal></div>
                    <div className='skills-icone-container'><div className='skills-icone'><BiLogoPostgresql color='#336791'/></div><Reveal><span className='skills-icone-text'>PostgreSQL</span></Reveal></div>
                </div>
                <div className='skills-icones-row'>
                    <div className='skills-icone-container'><div className='skills-icone'><SiTestcafe color='#E9A072'/></div><Reveal><span className='skills-icone-text'>Pytest</span></Reveal></div>
                    <div className='skills-icone-container'><div className='skills-icone'><TbApi color='#E9A072'/></div><Reveal><span className='skills-icone-text'>REST API</span></Reveal></div>
                    <div className='skills-icone-container'><div className='skills-icone'><RiDatabase2Fill color='#E9A072'/></div><Reveal><span className='skills-icone-text'>SQLalchemy</span></Reveal></div>
                </div>
            </div>
        </div>
        <div className='skills-front-column'>
            <div className='center'><Reveal><h2 className='skills-h2'>Front-end Skills<span className='point'>.</span></h2></Reveal></div>
            <div className='skills-icones-container'>
                <div className='skills-icones-row'>
                    <div className='skills-icone-container'><div className='skills-icone'><RiJavascriptFill color='#E7D24C'/></div><Reveal><span className='skills-icone-text'>JavaScript</span></Reveal></div>
                    <div className='skills-icone-container'><div className='skills-icone'><FaReact color='#00D8FF'/></div><Reveal><span className='skills-icone-text'>React.js</span></Reveal></div>
                    <div className='skills-icone-container'><div className='skills-icone'><SiThreedotjs color='#3F3F3F'/></div><Reveal><span className='skills-icone-text'>Three.js</span></Reveal></div>
                </div>
                <div className='skills-icones-row'>
                    <div className='skills-icone-container'><div className='skills-icone'><FaHtml5 color='#F1662A'/></div><Reveal><span className='skills-icone-text'>HTML</span></Reveal></div>
                    <div className='skills-icone-container'><div className='skills-icone'><FaCss3Alt color='#1572B6'/></div><Reveal><span className='skills-icone-text'>CSS</span></Reveal></div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
