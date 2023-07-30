import React from 'react'
import '../style/Shipmark.css';
import ShipmarkNavbar from '../components/shipmark_components/ShipmarkNavbar'
import ShipmarkCarousel from '../components/shipmark_components/ShipmarkCarousel'


function ShipmarkPage() {
  return (
    <div className='shipmark_body'>
        <ShipmarkNavbar/>
        <div className='shimpark_main'>
          <section id='shipmark_photo'>
            <h2 className='shipmark_h2'>Select the image</h2>
            <ShipmarkCarousel/>
            <button className='shipmark_photo_button'>AI Generate</button>
          </section>
          <section id='shipmark_ai'>
            <h2 className='shipmark_h2 '>AI output</h2>
            <div className='shipmark_ai_card shipmark_center'><img src={require("../assets/shipmark/AI/2e64ae91a.jpg")} className='shipmark_ai_image' alt='AI result'></img></div>
          </section>
          <section id='shipmark_annotation'>
            <h2 className='shipmark_h2 '>Auto annotation</h2>
            <div className='shipmark_ai_card shipmark_center'><img src={require("../assets/shipmark/annotation/2e64ae91a.jpg")} className='shipmark_ai_image' alt='Auto annotation'></img></div>
          </section>
        </div>
    </div>
  )
}

export default ShipmarkPage
