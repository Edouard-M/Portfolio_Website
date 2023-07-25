import React from 'react'
import {Reveal} from '../animations/Reveal'
import {FromLeft} from '../animations/FromLeft'

function About() {

  return (
    <div>
        <div className='about-main'>
            <div className='about-column-1'>
                <FromLeft side="left"><img src={require("../../assets/me/me_laptop.png")} className="about-photo" alt='Edouard'></img></FromLeft>
            </div>
            <div className='about-column-2'>
                <Reveal><h2 className='about-h2'>About<span className='point'>.</span></h2></Reveal>
                <Reveal><span className='about-subtitle '>Fullstack Junior Developer / young graduate</span></Reveal>
                <Reveal><span className='about-text'>Passionate about programming and algorithm. I aim to become a full-stack developer. During my different internships and must of all my personal practices, I acquired differents knowledge about software engineering</span></Reveal>
                <div className='about-sublist'>
                    <div className='about-subcolumn'>
                    <Reveal><li style={{"whiteSpace": "nowrap"}}> <span className='about-bold'>Degree:</span> Master (2018 - 2023)</li></Reveal>
                    <Reveal><li style={{"whiteSpace": "nowrap"}}> <span className='about-bold'>City:</span> Paris, France</li></Reveal>
                    <Reveal><li style={{"whiteSpace": "nowrap"}}> <span className='about-bold'>Email:</span> edouard.mignien@gmail.com</li></Reveal>
                    </div>
                    <div className='about-subcolumn'>
                    <Reveal><li style={{"whiteSpace": "nowrap"}}> <span className='about-bold'>Diploma:</span> Software Engineer</li></Reveal>
                    <Reveal><li style={{"whiteSpace": "nowrap"}}> <span className='about-bold'>School:</span> ECE Paris - Engineering School</li></Reveal>
                    <Reveal><li style={{"whiteSpace": "nowrap"}}> <span className='about-bold'>Phone:</span> (+33) 6 73 60 98 81</li></Reveal>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
