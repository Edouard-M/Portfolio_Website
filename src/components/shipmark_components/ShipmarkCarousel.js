import React from 'react'
import ShipmarkPhotoCard from './ShipmarkPhotoCard'
import {imageData1} from '../../data/ShipmarkData'
import {BiLeftArrow, BiRightArrow} from 'react-icons/bi'



function ShipmarkCarousel() {

    
  return (
    <div className='shipmark_photo_carousel'>
        <div className='shipmark_photo_carousel_button shipmark_center'><BiLeftArrow/></div>
        <div className='shipmark_photo_carousel_container'>
            <ShipmarkPhotoCard image={imageData1.image} id={imageData1.id} satellite={imageData1.satellite} />
            <ShipmarkPhotoCard image={imageData1.image} id={imageData1.id} satellite={imageData1.satellite} />
            <ShipmarkPhotoCard image={imageData1.image} id={imageData1.id} satellite={imageData1.satellite} />
        </div>
        <div className='shipmark_photo_carousel_button shipmark_center'><BiRightArrow/></div>
    </div>
  )
}

export default ShipmarkCarousel
