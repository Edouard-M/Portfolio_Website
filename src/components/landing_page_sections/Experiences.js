import React from 'react'
import Experience from '../landing_page_components/Experience'
import {experience1, experience2, experience3, experience4, experience5, experience6} from '../../data/ExperiencesData'
import {Reveal} from '../animations/Reveal'


function Experiences() {
  return (
    <div className='experiences-main'>
        <div className='center'><Reveal><h2>Experiences<span className='point'>.</span></h2></Reveal></div>
        <div className='experiences-container'>
            <div className='experiences-column experiences-column-left'>
                <div className='experiences-subtitle'>Education</div>
                <Experience title={experience1.title} subtitle={experience1.subtitle} text={experience1.text} list={experience1.list} image={experience1.image}/>
                <Experience title={experience2.title} subtitle={experience2.subtitle} text={experience2.text} list={experience2.list} image={experience2.image}/>
                <Experience title={experience3.title} subtitle={experience3.subtitle} text={experience3.text} list={experience3.list} image={experience3.image}/>
            </div>
            <div className='experiences-column experiences-column-right'>
                <div className='experiences-subtitle'>Professional</div>
                <Experience title={experience4.title} subtitle={experience4.subtitle} text={experience4.text} list={experience4.list} image={experience4.image}/>
                <Experience title={experience5.title} subtitle={experience5.subtitle} text={experience5.text} list={experience5.list} image={experience5.image}/>
                <Experience title={experience6.title} subtitle={experience6.subtitle} text={experience6.text} list={experience6.list} image={experience6.image}/>
            </div>
        </div>
        <div className='experiences-button'>Dowload Resume</div>
    </div>
  )
}

export default Experiences
