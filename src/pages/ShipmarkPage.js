import React from 'react'
import '../style/Shipmark.css';
import ShipmarkNavbar from '../components/shipmark_components/ShipmarkNavbar'

function ShipmarkPage() {
  return (
    <div className='shimpark_body'>
        <ShipmarkNavbar/>
        <div className='shimpark_main'>
          <section id='shipmark_photo'>
            <h2 className='shipmark_h2'>Select the image</h2>
            <div className='shipmark_photo_card'><img src={require("../assets/shipmark/photo/2e64ae91a.jpg")} className='shipmark_photo_image' alt='Auto annotation'></img></div>
          </section>
          <section id='shipmark_ai'>
            <h2 className='shipmark_h2 '>AI output</h2>
            <div className='shipmark_ai_card shimpark_center'><img src={require("../assets/shipmark/AI/2e64ae91a.jpg")} className='shipmark_ai_image' alt='AI result'></img></div>
          </section>
          <section id='shipmark_annotation'>
            <h2 className='shipmark_h2 '>Auto annotation</h2>
            <div className='shipmark_ai_card shimpark_center'><img src={require("../assets/shipmark/annotation/2e64ae91a.jpg")} className='shipmark_ai_image' alt='Auto annotation'></img></div>
          </section>
        </div>
    </div>
  )
}

export default ShipmarkPage
