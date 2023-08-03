import React, { useState } from 'react'
import Header from '../components/generics/Header'
import Hero from '../components/landing_page_sections/Hero'
import ScrollDown from '../components/generics/ScrollDown'
import About from '../components/landing_page_sections/About'
import Skills from '../components/landing_page_sections/Skills'
import Projects from '../components/landing_page_sections/Projects'
import Experiences from '../components/landing_page_sections/Experiences'
import Feedbacks from '../components/landing_page_sections/Feedbacks'
import Contact from '../components/landing_page_sections/Contact'
import Footer from '../components/generics/Footer';
import LanguageButton from '../components/landing_page_components/LanguageButton'
import '../style/App.css';

const init_laguage = "en"

function LandingPage() {

  const [activeLanguage, setActiveLanguage] = useState(init_laguage);

  return (
    <div>
        <Header/>
        <div className='landing_page'>
          <LanguageButton activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} value1="EN" value2="FR" />
          <section id="hero" className='hero2'>
            <Hero/>
            <ScrollDown/>
          </section>
          <div className='landing_page_rest'>
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
    </div>
    
  )
}

export default LandingPage
