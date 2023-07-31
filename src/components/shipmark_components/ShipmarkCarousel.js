import React, { useState } from 'react';
import ShipmarkPhotoCard from './ShipmarkPhotoCard'
import {BiLeftArrow, BiRightArrow} from 'react-icons/bi'

var tab = [
  {translate: "0", scale: "1", zindex: "5", opacity: "1"},
  {translate: "75", scale: "0.7", zindex: "4", opacity: "1"},
  {translate: "175", scale: "0.5", zindex: "3", opacity: "1"},
  {translate: "175", scale: "0.5", zindex: "2", opacity: "0"},
  {translate: "175", scale: "0.5", zindex: "2", opacity: "0"},
  {translate: "175", scale: "0.5", zindex: "2", opacity: "0"},
  {translate: "-175", scale: "0.5", zindex: "2", opacity: "0"},
  {translate: "-175", scale: "0.5", zindex: "2", opacity: "0"},
  {translate: "-175", scale: "0.5", zindex: "3", opacity: "1"},
  {translate: "-75", scale: "0.7", zindex: "4", opacity: "1"}
]

var tabCard = [tab[0], tab[1], tab[2], tab[3], tab[4], tab[5], tab[6], tab[7], tab[8], tab[9]]


function ShipmarkCarousel({activeCard, setActiveCard, data}) {

  const max_card = (tabCard.length);
  const [activePosition, setActivePosition] = useState(0);

  const handleClickLeft = () => {
    var card = activeCard+1;
    card = card%max_card;
    setActiveCard(card);

    var position = activePosition;
    var posTab = 0;

    position -= 1;

    if(position < 0)
      position = max_card-1;

    for (var i=0 ; i < max_card ; i++){
      posTab = position + i;
      posTab = posTab%max_card;
      tabCard[i] = tab[posTab];
    }

    setActivePosition(position);
  };

  const handleClickRight = () => {
    var card = activeCard-1;
    if(card < 0)
      card = max_card-1;
    setActiveCard(card);

    var position = activePosition;
    var posTab= 0;

    position += 1;

    if(position >= max_card)
      position = 0;

    for (var i=0 ; i < max_card ; i++){
      posTab = position + i;
      posTab = posTab%max_card;
      tabCard[i] = tab[posTab];
    }

    setActivePosition(position);
  };

    
  return (
    <div className='shipmark_photo_carousel_main shipmark_center'>
      <div className='shipmark_photo_carousel shipmark_center'>
          <div onClick={() => handleClickLeft()} className='shipmark_photo_carousel_button shipmark_center' id='left'><BiLeftArrow/></div>
          <div className='shipmark_photo_carousel_container shipmark_center'>
              <div className='shipmark_photo_carousel_card' style={{transform: `translateX(${tabCard[0].translate}%)`, scale: `${tabCard[0].scale}`, 'zIndex':`${tabCard[0].zindex}`, opacity: `${tabCard[0].opacity}`}}><ShipmarkPhotoCard image={data[0].image} id={data[0].id} satellite={data[0].satellite} /></div>
              <div className='shipmark_photo_carousel_card' style={{transform: `translateX(${tabCard[1].translate}%)`, scale: `${tabCard[1].scale}`, 'zIndex':`${tabCard[1].zindex}`, opacity: `${tabCard[1].opacity}`}}><ShipmarkPhotoCard image={data[1].image} id={data[1].id} satellite={data[1].satellite} /></div>
              <div className='shipmark_photo_carousel_card' style={{transform: `translateX(${tabCard[2].translate}%)`, scale: `${tabCard[2].scale}`, 'zIndex':`${tabCard[2].zindex}`, opacity: `${tabCard[2].opacity}`}}><ShipmarkPhotoCard image={data[2].image} id={data[2].id} satellite={data[2].satellite} /></div>
              <div className='shipmark_photo_carousel_card' style={{transform: `translateX(${tabCard[3].translate}%)`, scale: `${tabCard[3].scale}`, 'zIndex':`${tabCard[3].zindex}`, opacity: `${tabCard[3].opacity}`}}><ShipmarkPhotoCard image={data[3].image} id={data[3].id} satellite={data[3].satellite} /></div>
              <div className='shipmark_photo_carousel_card' style={{transform: `translateX(${tabCard[4].translate}%)`, scale: `${tabCard[4].scale}`, 'zIndex':`${tabCard[4].zindex}`, opacity: `${tabCard[4].opacity}`}}><ShipmarkPhotoCard image={data[4].image} id={data[4].id} satellite={data[4].satellite} /></div>
              <div className='shipmark_photo_carousel_card' style={{transform: `translateX(${tabCard[5].translate}%)`, scale: `${tabCard[5].scale}`, 'zIndex':`${tabCard[5].zindex}`, opacity: `${tabCard[5].opacity}`}}><ShipmarkPhotoCard image={data[5].image} id={data[5].id} satellite={data[5].satellite} /></div>
              <div className='shipmark_photo_carousel_card' style={{transform: `translateX(${tabCard[6].translate}%)`, scale: `${tabCard[6].scale}`, 'zIndex':`${tabCard[6].zindex}`, opacity: `${tabCard[6].opacity}`}}><ShipmarkPhotoCard image={data[6].image} id={data[6].id} satellite={data[6].satellite} /></div>
              <div className='shipmark_photo_carousel_card' style={{transform: `translateX(${tabCard[7].translate}%)`, scale: `${tabCard[7].scale}`, 'zIndexx':`${tabCard[7].zindex}`, opacity: `${tabCard[7].opacity}`}}><ShipmarkPhotoCard image={data[7].image} id={data[7].id} satellite={data[7].satellite} /></div>
              <div className='shipmark_photo_carousel_card' style={{transform: `translateX(${tabCard[8].translate}%)`, scale: `${tabCard[8].scale}`, 'zIndex':`${tabCard[8].zindex}`, opacity: `${tabCard[8].opacity}`}}><ShipmarkPhotoCard image={data[8].image} id={data[8].id} satellite={data[8].satellite} /></div>
              <div className='shipmark_photo_carousel_card' style={{transform: `translateX(${tabCard[9].translate}%)`, scale: `${tabCard[9].scale}`, 'zIndex':`${tabCard[9].zindex}`, opacity:`${tabCard[9].opacity}`}}><ShipmarkPhotoCard image={data[9].image} id={data[9].id} satellite={data[9].satellite} /></div>
          </div>
          <div onClick={() => handleClickRight()} className='shipmark_photo_carousel_button shipmark_center' id='right'><BiRightArrow/></div>
      </div>
    </div>
  )
}

export default ShipmarkCarousel
