import React from 'react'
import Header from '../components/generics/Header'
import Hero from '../components/landing_page_sections/Hero'
import About from '../components/landing_page_sections/About'
import Skills from '../components/landing_page_sections/Skills'



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
          <section id="skills" className='skills'>
            <Skills/>
          </section>
        </div>
    </div>
    
  )
}

export default LandingPage
