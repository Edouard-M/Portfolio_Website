import React from 'react'
import Navbar from './Navbar'

function Header({data}) {
  return (
    <div className='header'>
      <Navbar data={data}/>
    </div>
  )
}

export default Header
