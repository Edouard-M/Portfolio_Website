import React from 'react'
import Header from '../components/Header'
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Resume from '../components/Resume'



function LandingPage() {
  return (
    <div>
        <Header/>
        <div className='landing-page'>
          <section id="home" className='home'>
            <Home/>
          </section>
          <div id="main" className='main'>
            <section id="about" className='about'>
              <About/>
            </section>
            <section id="skills" className='skills'>
              <Skills/>
            </section>
            <section id="projects" className='projects'>
              <Projects/>
            </section>
            <section id="resume" className='resume'>
              <Resume/>
            </section>
          </div>
        </div>
    </div>
    
  )
}

export default LandingPage
