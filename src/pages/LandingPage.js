import React from 'react'
import Header from '../components/generics/Header'
import Hero3 from '../components/landing_page_sections/Hero3'
import About from '../components/landing_page_sections/About'
import Skills from '../components/landing_page_sections/Skills'
import Projects from '../components/landing_page_sections/Projects'
import Experiences from '../components/landing_page_sections/Experiences'
import Feedbacks from '../components/landing_page_sections/Feedbacks'
import Contact from '../components/landing_page_sections/Contact'
import Footer from '../components/generics/Footer';
import '../style/App.css';



function LandingPage() {
  return (
    <div>
        <Header/>
        <div className='landing_page'>
          <section id="hero" className='hero2'>
            <Hero3/>
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
          <section id="feedbacks" className='feedbacks'>
            <Feedbacks/>
          </section>
          <section id="contact" className='contact'>
            <Contact/>
          </section>
        </div>
        <Footer/>
    </div>
    
  )
}

export default LandingPage
