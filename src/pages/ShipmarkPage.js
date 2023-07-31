import React, { useState } from 'react';
import '../style/Shipmark.css';
import ShipmarkNavbar from '../components/shipmark_components/ShipmarkNavbar'
import ShipmarkCarousel from '../components/shipmark_components/ShipmarkCarousel'
import {imageData1 ,imageData2, imageData3, imageData4, imageData5, imageData6, imageData7, imageData8, imageData9, imageData10} from '../data/ShipmarkData'

var data = [imageData1, imageData2, imageData3, imageData4, imageData5, imageData6, imageData7, imageData8, imageData9, imageData10]

function ShipmarkPage() {

  const card_init = 0;
  const [activeCard, setActiveCard] = useState(card_init);

  return (
    <div className='shipmark_body'>
        <ShipmarkNavbar/>
        <div className='shimpark_main'>
          <section id='shipmark_photo'>
            <h2 className='shipmark_h2'>Select the image</h2>
            <ShipmarkCarousel activeCard={activeCard} setActiveCard={setActiveCard} data={data}/>
            <a href="#shipmark_ai"  className='shipmark_photo_button'>AI Generate</a>
          </section>
          <section id='shipmark_ai'>
            <h2 className='shipmark_h2 '>AI output</h2>
            <div className='shipmark_ai_card shipmark_center'><img src={require(`../assets/shipmark/AI/${data[activeCard].id}.jpg`)} className='shipmark_ai_image' alt='AI result'></img></div>
          </section>
          <section id='shipmark_annotation'>
            <h2 className='shipmark_h2 '>Auto annotation</h2>
            <div className='shipmark_ai_card shipmark_center'><img src={require(`../assets/shipmark/annotation/${data[activeCard].id}.jpg`)} className='shipmark_ai_image' alt='Auto annotation'></img></div>
          </section>
        </div>
    </div>
  )
}

export default ShipmarkPage
