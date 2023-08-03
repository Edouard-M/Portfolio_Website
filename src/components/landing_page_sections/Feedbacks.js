import React, { useState } from 'react'
import Feedback from '../landing_page_components/Feedback'
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'
import { feedback1, feedback2} from '../../data/french/FeedbacksData'
import {Reveal} from '../animations/Reveal'

var feedback_data = feedback1;

function Feedbacks() {

  const [activeFeedback, setActiveFeedback] = useState(1);

  const handleClick = (value) => {
    var newActive = activeFeedback + value;
    if(newActive < 1)
      newActive = 2;
    else if(newActive > 2)
      newActive = 1;

    if(newActive===1)
      feedback_data=feedback1;
    else if(newActive===2)
      feedback_data=feedback2;

    setActiveFeedback(newActive);
  };

  return (
    <div className='feedbacks-main'>
        <div className='center'><Reveal><h2>Feedbacks<span className='point'>.</span></h2></Reveal></div>
        <div style={{"display":"flex", "flexDirection":"row", "alignItems":"center", "marginTop":"15px"}}><div onClick={() => handleClick(-1)} className='feedbacks-button feedbacks-left'><IoIosArrowBack/></div><Feedback name={feedback_data.name} subtitle1={feedback_data.subtitle1} subtitle2={feedback_data.subtitle2} text={feedback_data.text}/><div onClick={() => handleClick(1)} className='feedbacks-button feedbacks-right'><IoIosArrowForward/></div></div>
        <div className='feedbacks-counter'>
          <div className='feedbacks-counter-point' id={activeFeedback === 1 ? "active":""}></div>
          <div className='feedbacks-counter-point' id={activeFeedback === 2 ? "active":""}></div>
        </div>
    </div>
  )
}

export default Feedbacks
