import React from 'react'
import Header from '../components/Header'
import Home from '../components/Home'



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
            about
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
