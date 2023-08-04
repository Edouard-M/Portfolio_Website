import React from 'react'
import {Reveal} from '../animations/Reveal'
import {FromLeft} from '../animations/FromLeft'

function About({data}) {

  return (
    <div>
        <div className='about-main'>
            <div className='about-column-1'>
                <FromLeft side="left"><img src={require("../../assets/me/me_laptop.png")} className="about-photo" alt='Edouard'></img></FromLeft>
            </div>
            <div className='about-column-2'>
                <Reveal><h2 className='about-h2'>{data.section}<span className='point'>.</span></h2></Reveal>
                <Reveal><span className='about-subtitle '>{data.title}</span></Reveal>
                <Reveal><div className='about-text'>{data.text}</div></Reveal>
                <div className='about-sublist'>
                    <div className='about-subcolumn'>
                    <Reveal><li style={{"marginBottom":"5px"}}> <span className='about-bold'>{data.list[0].title}</span> {data.list[0].text}</li></Reveal>
                    <Reveal><li style={{"marginBottom":"5px"}}> <span className='about-bold'>{data.list[1].title}</span> {data.list[1].text}</li></Reveal>
                    <Reveal><li style={{"marginBottom":"5px"}}> <span className='about-bold'>{data.list[2].title}</span> {data.list[2].text}</li></Reveal>
                    </div>
                    <div className='about-subcolumn'>
                    <Reveal><li style={{"marginBottom":"5px"}}> <span className='about-bold'>{data.list[3].title}</span> {data.list[3].text}</li></Reveal>
                    <Reveal><li style={{"marginBottom":"5px"}}> <span className='about-bold'>{data.list[4].title}</span> {data.list[4].text}</li></Reveal>
                    <Reveal><li style={{"marginBottom":"5px"}}> <span className='about-bold'>{data.list[5].title}</span> {data.list[5].text}</li></Reveal>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
