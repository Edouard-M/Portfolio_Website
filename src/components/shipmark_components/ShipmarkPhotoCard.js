import React from 'react'
import {MdPhotoCamera} from 'react-icons/md'

function ShipmarkPhotoCard({image, id, satellite}) {
  return (
    <div className='shipmark_photo_card'>
        <div className='shipmark_photo_card_image'>
            <img src={require(`../../assets/shipmark/photo/${image}.jpg`)} className='shipmark_photo_image' alt='Auto annotation'></img>
            <div className='shipmark_photo_card_sub shipmark_center'>
                <MdPhotoCamera className='shipmark_photo_card_sub_logo'/>
                <div className='shipmark_photo_card_sub_text '>
                    <div className='shipmark_photo_card_sub_text_title'>Photo id: {id}</div>
                    <div className='shipmark_photo_card_sub_text_subtitle'>from {satellite} satellite</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShipmarkPhotoCard
