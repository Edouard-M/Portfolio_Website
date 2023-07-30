import React from 'react'
import ShipmarkPhotoCard from './ShipmarkPhotoCard'
import {imageData1 ,imageData2, imageData3, imageData4, imageData5, imageData6, imageData7} from '../../data/ShipmarkData'
import {BiLeftArrow, BiRightArrow} from 'react-icons/bi'



function ShipmarkCarousel() {

    
  return (
    <div className='shipmark_photo_carousel shipmark_center'>
        <div className='shipmark_photo_carousel_button shipmark_center' id='left'><BiLeftArrow/></div>
        <div className='shipmark_photo_carousel_container shipmark_center'>
            <div className='shipmark_photo_carousel_card' id='hidden'><ShipmarkPhotoCard image={imageData1.image} id={imageData1.id} satellite={imageData1.satellite} /></div>
            <div className='shipmark_photo_carousel_card' id='back'><ShipmarkPhotoCard image={imageData2.image} id={imageData2.id} satellite={imageData2.satellite} /></div>
            <div className='shipmark_photo_carousel_card'><ShipmarkPhotoCard image={imageData3.image} id={imageData3.id} satellite={imageData3.satellite} /></div>
            <div className='shipmark_photo_carousel_card' id="active"><ShipmarkPhotoCard image={imageData4.image} id={imageData4.id} satellite={imageData4.satellite} /></div>
            <div className='shipmark_photo_carousel_card'><ShipmarkPhotoCard image={imageData5.image} id={imageData5.id} satellite={imageData5.satellite} /></div>
            <div className='shipmark_photo_carousel_card' id='back'><ShipmarkPhotoCard image={imageData6.image} id={imageData6.id} satellite={imageData6.satellite} /></div>
            <div className='shipmark_photo_carousel_card' id='hidden'><ShipmarkPhotoCard image={imageData7.image} id={imageData7.id} satellite={imageData7.satellite} /></div>
        </div>
        <div className='shipmark_photo_carousel_button shipmark_center' id='right'><BiRightArrow/></div>
    </div>
  )
}

export default ShipmarkCarousel
