import React from 'react'
import Project from '../landing_page_components/Project'
import {Reveal} from '../animations/Reveal'


function Projects({data}) {
  return (
    <div className='projects-main'>
        <div className='center'><Reveal><h2 className='projects-h2'>{data[0]}<span className='point'>.</span></h2></Reveal></div>
        <div className='projects-container'>
            <Project title={data[1].title} subtitle={data[1].subtitle} text={data[1].text} image={data[1].image} button_color={data[1].button_color} github_link={data[1].github_link} demo_link={data[1].demo_link} demo_button={data[1].demo_button}/>
            <Project title={data[2].title} subtitle={data[2].subtitle} text={data[2].text} image={data[2].image} button_color={data[2].button_color} github_link={data[2].github_link} demo_link={data[2].demo_link} demo_button={data[2].demo_button}/>
            <Project title={data[3].title} subtitle={data[3].subtitle} text={data[3].text} image={data[3].image} button_color={data[3].button_color} github_link={data[3].github_link} demo_link={data[3].demo_link} demo_button={data[3].demo_button}/>
        </div>
    </div>
  )
}

export default Projects
