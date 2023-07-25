import React from 'react'
import Project from '../landing_page_components/Project'
import { project1, project2, project3} from '../../data/ProjectsData'
import {Reveal} from '../animations/Reveal'


function Projects() {
  return (
    <div className='projects-main'>
        <div className='center'><Reveal><h2 className='projects-h2'>Projects<span className='point'>.</span></h2></Reveal></div>
        <div className='projects-container'>
            <Project title={project1.title} subtitle={project1.subtitle} text={project1.text} image={project1.image} button_color={project1.button_color} github_link={project1.github_link} demo_link={project1.demo_link}/>
            <Project title={project2.title} subtitle={project2.subtitle} text={project2.text} image={project2.image} button_color={project2.button_color} github_link={project2.github_link} demo_link={project2.demo_link}/>
            <Project title={project3.title} subtitle={project3.subtitle} text={project3.text} image={project3.image} button_color={project3.button_color} github_link={project3.github_link} demo_link={project3.demo_link}/>
        </div>
    </div>
  )
}

export default Projects
