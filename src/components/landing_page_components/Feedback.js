import React from 'react'
import {BsPersonCircle} from 'react-icons/bs'
import {Reveal} from '../animations/Reveal'


function Feedback({name, subtitle1, subtitle2, text}) {
  return (
    <div className='feedback-container'>
      <div className='feedback-image'><BsPersonCircle className='feedback-icone'/></div>
      <Reveal><div className='feedback-name'>{name}</div></Reveal>
      <Reveal><div className='feedback-subtitle'>{subtitle1}</div></Reveal>
      <Reveal><div className='feedback-subtitle'>{subtitle2}</div></Reveal>
      <Reveal><div className='feedback-citation'><div className='feedback-quote feedback-rotate'>"</div><div className='feedback-text'>{text}</div><div className='feedback-quote'>"</div></div></Reveal>
    </div>
  )
}

export default Feedback
