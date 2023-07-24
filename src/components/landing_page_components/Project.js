import React from 'react'
import { Link } from "react-router-dom";

function Project({ title, subtitle, text, image, button_color, github_link, demo_link }) {
  return (
    <div className='projects-project'>
        <div className="project-image-container"><img src={require(`../../assets/projects/${image}`)} className="project-image" alt={title}></img></div>
        <div className='project-title'>{title}</div>
        <div className='project-subtitle'>{subtitle}</div>
        <div className='project-text'>{text}</div>
        <div className='project-point'>.</div>
        <div className='project-button-row'>
            <div><Link to={github_link} target="_blank" ><button className='project-button-github'>Github</button></Link></div>
            <div style={{ color: 'red', }}><button className='project-button-demo' style={{ '--button-background-color': button_color}}>Open Demo</button></div>
        </div>
    </div>
  )
}

export default Project
