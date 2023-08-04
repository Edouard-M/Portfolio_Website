import React, { useState, useEffect } from 'react';
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

import {aboutData as aboutDataEn} from '../data/english/AboutData'
import {aboutData as aboutDataFr} from '../data/french/AboutData'
import {heroData as heroDataEn} from '../data/english/HeroData'
import {heroData as heroDataFr} from '../data/french/HeroData'
import {skillsData as skillsDataEn} from '../data/english/SkillsData'
import {skillsData as skillsDataFr} from '../data/french/SkillsData'
import {navbarData as navbarDataEn} from '../data/english/NavbarData'
import {navbarData as navbarDataFr} from '../data/french/NavbarData'

var navbarData = navbarDataEn;
var aboutData = aboutDataEn;
var heroData = heroDataEn;
var skillsData = skillsDataEn;

const init_laguage = "en"

function LandingPage() {

  const [activeLanguage, setActiveLanguage] = useState(init_laguage);

  useEffect(() => {
    if(activeLanguage === "EN"){
      aboutData = aboutDataEn
      heroData = heroDataEn
      skillsData = skillsDataEn
      navbarData = navbarDataEn
    }
    else{
      aboutData = aboutDataFr
      heroData = heroDataFr
      skillsData = skillsDataFr
      navbarData = navbarDataFr
    }
  }, [activeLanguage]);

  return (
    <div>
        <Header data={navbarData}/>
        <div className='landing_page'>
          <LanguageButton activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} value1="EN" value2="FR" />
          <section id="hero" className='hero2'>
            <Hero data={heroData}/>
            <ScrollDown/>
          </section>
          <div className='landing_page_rest'>
          <section id="about" className='about'>
            <About data={aboutData}/>
          </section>
          <section id="skills" className='skills'>
            <Skills data={skillsData}/>
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
