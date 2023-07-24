import React from 'react'
import Feedback from '../landing_page_components/Feedback'

function Feedbacks() {
  return (
    <div className='feedbacks-main'>
        <h2>Feedbacks<span className='point'>.</span></h2>
        <Feedback/>
        <div className='feedbacks-counter'>counter here</div>
    </div>
  )
}

export default Feedbacks
