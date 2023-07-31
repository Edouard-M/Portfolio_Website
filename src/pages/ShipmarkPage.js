import React, { useState } from 'react';
import {BsCircleFill} from 'react-icons/bs'
import '../style/Shipmark.css';
import ShipmarkNavbar from '../components/shipmark_components/ShipmarkNavbar'
import ShipmarkCarousel from '../components/shipmark_components/ShipmarkCarousel'
import {imageData1 ,imageData2, imageData3, imageData4, imageData5, imageData6, imageData7, imageData8, imageData9, imageData10} from '../data/ShipmarkData'

var data = [imageData1, imageData2, imageData3, imageData4, imageData5, imageData6, imageData7, imageData8, imageData9, imageData10]

const shipmarkAbout = "The Shipmark project was initially a proposal from Airbus Defence and Space. This project aims to detect ships at sea to identify their position and direction. Using Machine Learning technology, this algorithm has been trained using a dataset of around 300,000 satellite images provided by Airbus.";


function ShipmarkPage() {

  const card_init = 0;
  const [activeCard, setActiveCard] = useState(card_init);

  return (
    <div className='shipmark_body'>
        <ShipmarkNavbar/>
        <div className='shimpark_main'>
          <h1 className='shipmark_h1'>Shipmark</h1>
          <div className='shipmark_text_container'>
            <div className='shipmark_ai_text'>{shipmarkAbout}</div>
          </div>
          <section id='shipmark_photo'>
            <h2 className='shipmark_h2'>Select the image</h2>
            <ShipmarkCarousel activeCard={activeCard} setActiveCard={setActiveCard} data={data}/>
            <a href="#shipmark_ai"  className='shipmark_photo_button'>AI Generate</a>
          </section>
          <section id='shipmark_ai'>
            <h2 className='shipmark_h2 '>AI output</h2>
            <div className='shipmark_ai_text_container'>
              <div className='shipmark_ai_text'>As shown in the images below the AI detect each ship with 4 differents markers:</div>
              <div className='shipmark_ai_text_list'>< BsCircleFill style={{color: "#0000FF", marginRight:"6px"}}/> the bow of the ship</div>
              <div className='shipmark_ai_text_list'><BsCircleFill style={{color: "#FF00FF", marginRight:"6px"}}/>  the stern left of the ship</div>
              <div className='shipmark_ai_text_list'><BsCircleFill style={{color: "#3859ED", marginRight:"6px"}}/>  the stern right of the ship</div>
              <div className='shipmark_ai_text_list'><BsCircleFill style={{color: "#00FF00", marginRight:"6px"}}/>  rectangle containing a ship</div>
            </div>
            <div className='shipmark_ai_card shipmark_center'><img src={require(`../assets/shipmark/AI/${data[activeCard].id}.jpg`)} className='shipmark_ai_image' alt='AI result'></img></div>
          </section>
          <section id='shipmark_annotation'>
            <h2 className='shipmark_h2 '>Auto annotation</h2>
            <div className='shipmark_ai_text_container'>
              <div className='shipmark_ai_text'>The initial dataset provided by airbus contained over 300,000 satellite images, so it was impossible for us to go through and sort all these images by hand.</div>
              <div className='shipmark_ai_text'>So, by using our Python programming skills we've created an algorithm able to help us by creating a first version of tags on the images. The result below:</div>
              <div className='shipmark_ai_text_list'><BsCircleFill style={{color: "#FF0000", marginRight:"6px"}}/>  rectangle is the front of the ship</div>
              <div className='shipmark_ai_text_list'><BsCircleFill style={{color: "#00FF00", marginRight:"6px"}}/>  rectangle is the back of the ship</div>
            </div>
            <div className='shipmark_ai_card shipmark_center'><img src={require(`../assets/shipmark/annotation/${data[activeCard].id}.jpg`)} className='shipmark_ai_image' alt='Auto annotation'></img></div>
            <div className='shipmark_ai_text_container'>
              <h3 className='shipmark_h3'>How it works:</h3>
              <div className='shipmark_ai_text'>The algorithm looks for the bow and stern of each vessel. It compares 2 large zones for each vessel (red and green zones in the photo) to find the vessel's wake. The area with the most wake is then identified as the stern.</div>
              <div className='shipmark_ai_text_list'>top left corner:  the initial image</div>
              <div className='shipmark_ai_text_list'>top right corner: coloured masks to identify the vessel</div>
              <div className='shipmark_ai_text_list'>bottom left corner: mask that highlight the pale colours in mauve, to find the ship's wake</div>
              <div className='shipmark_ai_text_list'>bottom right corner: the resulting image comparing the 2 wake zones, red and green</div>
            </div>
          </section>
        </div>
    </div>
  )
}

export default ShipmarkPage
