import React from 'react'
import Header from '../components/generics/Header'
import Hero from '../components/landing_page_sections/Hero'
import About from '../components/landing_page_sections/About'
import Skills from '../components/landing_page_sections/Skills'
import Projects from '../components/landing_page_sections/Projects'
import Experiences from '../components/landing_page_sections/Experiences'



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
          <section id="projects" className='projects'>
            <Projects/>
          </section>
          <section id="experiences" className='experiences'>
            <Experiences/>
          </section>
        </div>
    </div>
    
  )
}

export default LandingPage
