import React from 'react'
import Header from '../components/generics/Header'
import Hero from '../components/landing_page_sections/Hero'



function LandingPage() {
  return (
    <div>
        <Header/>
        <div className='landing-page'>
          <section id="hero" className='hero'>
            <Hero/>
          </section>
        </div>
    </div>
    
  )
}

export default LandingPage
