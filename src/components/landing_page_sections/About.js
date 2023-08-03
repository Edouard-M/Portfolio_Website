import React from 'react'
import {Reveal} from '../animations/Reveal'
import {FromLeft} from '../animations/FromLeft'
import {aboutData} from '../../data/english/AboutData'

function About() {

  return (
    <div>
        <div className='about-main'>
            <div className='about-column-1'>
                <FromLeft side="left"><img src={require("../../assets/me/me_laptop.png")} className="about-photo" alt='Edouard'></img></FromLeft>
            </div>
            <div className='about-column-2'>
                <Reveal><h2 className='about-h2'>About<span className='point'>.</span></h2></Reveal>
                <Reveal><span className='about-subtitle '>{aboutData.title}</span></Reveal>
                <Reveal><div className='about-text'>{aboutData.text}</div></Reveal>
                <div className='about-sublist'>
                    <div className='about-subcolumn'>
                    <Reveal><li style={{"marginBottom":"5px"}}> <span className='about-bold'>{aboutData.list[0].title}</span> {aboutData.list[0].text}</li></Reveal>
                    <Reveal><li style={{"marginBottom":"5px"}}> <span className='about-bold'>{aboutData.list[1].title}</span> {aboutData.list[1].text}</li></Reveal>
                    <Reveal><li style={{"marginBottom":"5px"}}> <span className='about-bold'>{aboutData.list[2].title}</span> {aboutData.list[2].text}</li></Reveal>
                    </div>
                    <div className='about-subcolumn'>
                    <Reveal><li style={{"marginBottom":"5px"}}> <span className='about-bold'>{aboutData.list[3].title}</span> {aboutData.list[3].text}</li></Reveal>
                    <Reveal><li style={{"marginBottom":"5px"}}> <span className='about-bold'>{aboutData.list[4].title}</span> {aboutData.list[4].text}</li></Reveal>
                    <Reveal><li style={{"marginBottom":"5px"}}> <span className='about-bold'>{aboutData.list[5].title}</span> {aboutData.list[5].text}</li></Reveal>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
