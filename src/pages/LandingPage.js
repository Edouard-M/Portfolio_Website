import React from 'react'
import Header from '../components/generics/Header'
import Hero from '../components/landing_page_sections/Hero'
import About from '../components/landing_page_sections/About'



function LandingPage() {
  return (
    <div>
        <Header/>
        <div className='landing-page'>
          <section id="hero" className='hero'>
            <Hero/>
          </section>
          <section id="about" className='about'>
            <About/>
          </section>
        </div>
    </div>
    
  )
}

export default LandingPage
