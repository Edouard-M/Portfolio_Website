import React from 'react'
import { Link } from "react-router-dom";
import {Reveal} from '../animations/Reveal'
import {BiLogoGithub} from 'react-icons/bi'

function Project({ title, subtitle, text, image, button_color, github_link, demo_link, text_color }) {
  return (
    <div className='projects-project'>
        <div className="project-image-container"><img src={require(`../../assets/projects/${image}`)} className="project-image" alt={title}></img></div>
        <Reveal><div className='project-title'>{title}</div></Reveal>
        <Reveal><div className='project-subtitle'>{subtitle}</div></Reveal>
        <Reveal><div className='project-text'>{text}</div></Reveal>
        <div className='project-point'>.</div>
        <div className='project-button-row'>
            <div style={{display: "flex", 'alignItems': "center", 'justifyContent': "center"}} ><Link to={github_link} target="_blank" ><button className='project-button-github'><BiLogoGithub/></button></Link></div>
            <div><Link to={demo_link} target="_blank" ><button className='project-button-demo' style={{ '--button-background-color': button_color, color: "var(--color-text)"}}>Open Demo</button></Link></div>
        </div>
    </div>
  )
}

export default Project
