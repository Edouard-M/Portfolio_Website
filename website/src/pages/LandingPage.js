import React from 'react'
import Header from '../components/Header'
import Home from '../components/Home'
import About from '../components/About'



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
            skills
            </section>
            <section id="projects" className='projects'>
            projects
            </section>
            <section id="resume" className='resume'>
            resume
            </section>
          </div>
        </div>
    </div>
    
  )
}

export default LandingPage
