import React from 'react'
import { useEffect } from "react";




function Loader() {
  return (
    useEffect(() => {
        window.onload=()=>{
        <div id="preloader">
        </div>
        }
    })
  )
}

export default Loader
