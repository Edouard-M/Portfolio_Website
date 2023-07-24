import React from 'react'


const text = "Passionate about programming and algorithm. I aim to become a full-stack developer. During my different internships and must of all my personal practices, I acquired differents knowledge about software engineering";

function Feedback() {
  return (
    <div className='feedback-container'>
      <div className='feedback-image'></div>
      <div className='feedback-name'>Alain Houelle</div>
      <div className='feedback-subtitle'>Former internship supervisor & teacher</div>
      <div className='feedback-subtitle'>Manager at Aresia Ozoir</div>
      <div className='feedback-citation'><div className='feedback-quote feedback-rotate'>"</div><div className='feedback-text'>{text}</div><div className='feedback-quote'>"</div></div>
    </div>
  )
}

export default Feedback
