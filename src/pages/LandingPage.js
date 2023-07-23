import React from 'react'
import Header from '../components/generics/Header'
import Home from '../components/landing_page_sections/Home'



function LandingPage() {
  return (
    <div>
        <Header/>
        <div className='landing-page'>
          <section id="home" className='home'>
            <Home/>
          </section>
        </div>
    </div>
    
  )
}

export default LandingPage
