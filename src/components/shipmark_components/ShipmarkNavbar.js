import React from 'react'
import { Link } from "react-router-dom";
import {IoIosReturnLeft} from 'react-icons/io'
import {TbPhotoSensor2, TbPhotoAi, TbFocusAuto} from 'react-icons/tb'


function ShipmarkNavbar() {
  return (
    <div className='shipmark_navbar_background'>
      <div  className='shipmark_navbar'>
        <Link to="/" target="" className='shipmark_navbar_button shimpark_center'>
          <div className='shipmark_navbar_button_logo shimpark_center'><IoIosReturnLeft/></div><div>return</div>
        </Link>
        <div className='shipmark_navbar_title shimpark_center'><img src={require("../../assets/shipmark/logo.png")} className="shipmark_navbar_logo" alt='Logo Shipmark'></img>SHIPMARK</div>
        <a href="#shipmark_photo" className='shipmark_navbar_section'><div className='shipmark_navbar_section_icone shimpark_center'><TbPhotoSensor2/></div>Photo</a>
        <a href="#shipmark_ai" className='shipmark_navbar_section'><div className='shipmark_navbar_section_icone shimpark_center'><TbPhotoAi/></div>AI Generated</a>
        <a href="#shipmark_annotation" className='shipmark_navbar_section'><div className='shipmark_navbar_section_icone shimpark_center'><TbFocusAuto/></div>Annotation</a>
      </div>
    </div>
  )
}

export default ShipmarkNavbar
