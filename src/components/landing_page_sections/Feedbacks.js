import React, { useState } from 'react';
import Feedback from '../landing_page_components/Feedback'
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'
import {Reveal} from '../animations/Reveal'

function Feedbacks({data}) {

  const [activeFeedback, setActiveFeedback] = useState(1);

  const handleClick = (value) => {
    var newActive = activeFeedback + value;
    if(newActive < 1)
      newActive = 2;
    else if(newActive > 2)
      newActive = 1;

    setActiveFeedback(newActive);
  };

  return (
    <div className='feedbacks-main'>
        <div className='center'><Reveal><h2>{data[0]}<span className='point'>.</span></h2></Reveal></div>
        <div style={{"display":"flex", "flexDirection":"row", "alignItems":"center", "marginTop":"15px"}}><div onClick={() => handleClick(-1)} className='feedbacks-button feedbacks-left'><IoIosArrowBack/></div><Feedback name={data[activeFeedback].name} subtitle1={data[activeFeedback].subtitle1} subtitle2={data[activeFeedback].subtitle2} text={data[activeFeedback].text}/><div onClick={() => handleClick(1)} className='feedbacks-button feedbacks-right'><IoIosArrowForward/></div></div>
        <div className='feedbacks-counter'>
          <div className='feedbacks-counter-point' id={activeFeedback === 1 ? "active":""}></div>
          <div className='feedbacks-counter-point' id={activeFeedback === 2 ? "active":""}></div>
        </div>
    </div>
  )
}

export default Feedbacks
