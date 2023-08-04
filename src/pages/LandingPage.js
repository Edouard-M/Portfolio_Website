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

import {heroData as heroDataEn} from '../data/english/HeroData'
import {heroData as heroDataFr} from '../data/french/HeroData'
import {aboutData as aboutDataEn} from '../data/english/AboutData'
import {aboutData as aboutDataFr} from '../data/french/AboutData'
import {skillsData as skillsDataEn} from '../data/english/SkillsData'
import {skillsData as skillsDataFr} from '../data/french/SkillsData'
import {navbarData as navbarDataEn} from '../data/english/NavbarData'
import {navbarData as navbarDataFr} from '../data/french/NavbarData'
import {projectsData as projectsDataEn} from '../data/english/ProjectsData'
import {projectsData as projectsDataFr} from '../data/french/ProjectsData'
import {feedbacksData as feedbacksDataEn} from '../data/english/FeedbacksData'
import {feedbacksData as feedbacksDataFr} from '../data/french/FeedbacksData'
import {contactData as contactDataEn} from '../data/english/ContactData'
import {contactData as contactDataFr} from '../data/french/ContactData'
import {experiencesData as experiencesDataEn} from '../data/english/ExperiencesData'
import {experiencesData as experiencesDataFr} from '../data/french/ExperiencesData'
import {footerData as footerDataEn} from '../data/english/FooterData'
import {footerData as footerDataFr} from '../data/french/FooterData'

var navbarData = navbarDataEn;
var aboutData = aboutDataEn;
var heroData = heroDataEn;
var skillsData = skillsDataEn;
var projectsData = projectsDataEn;
var feedbacksData = feedbacksDataEn;
var contactData = contactDataEn;
var experiencesData = experiencesDataEn;
var footerData = footerDataEn;

const init_laguage = "en"

function LandingPage() {

  const [activeLanguage, setActiveLanguage] = useState(init_laguage);

  useEffect(() => {
    if(activeLanguage === "EN"){
      aboutData = aboutDataEn
      heroData = heroDataEn
      skillsData = skillsDataEn
      navbarData = navbarDataEn
      projectsData = projectsDataEn
      feedbacksData = feedbacksDataEn
      contactData = contactDataEn
      experiencesData = experiencesDataEn
      footerData = footerDataEn
    }
    else{
      aboutData = aboutDataFr
      heroData = heroDataFr
      skillsData = skillsDataFr
      navbarData = navbarDataFr
      projectsData = projectsDataFr
      feedbacksData = feedbacksDataFr
      contactData = contactDataFr
      experiencesData = experiencesDataFr
      footerData = footerDataFr
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
            <Projects data={projectsData}/>
          </section>
          <section id="experiences" className='experiences'>
            <Experiences data={experiencesData}/>
          </section>
          <section id="feedbacks" className='feedbacks'>
            <Feedbacks data={feedbacksData}/>
          </section>
          <section id="contact" className='contact'>
            <Contact data={contactData}/>
          </section>
          </div>
            <Footer data={footerData}/>
        </div>
    </div>
    
  )
}

export default LandingPage
