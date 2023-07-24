import React from 'react'
import Project from '../landing_page_components/Project'

var project1 = {
    title: "Shipmark",
    subtitle: "A partnership with Airbus D&S",
    text: "A project about something in the aim to upgrade something by using something with somebody.",
    image: "shipmark.png",
    button_color: "#C7E4F5",
    github_link: "https://github.com/Edouard-M/Ship_Detection_Scripts/tree/main",
    demo_link: "",
};

var project2 = {
    title: "Blindar",
    subtitle: "A school project",
    text: "A project about something in the aim to upgrade something by using something with somebody.",
    image: "blindar.png",
    button_color: "#E9A072",
    github_link: "https://blindar.fr/",
    demo_link: "",
};

var project3 = {
    title: "Jet Flight",
    subtitle: "A personal project",
    text: "A project about something in the aim to upgrade something by using something with somebody.",
    image: "jet-flight.png",
    button_color: "#73BBC5",
    github_link: "https://jet-flight.fr/",
    demo_link: "",
};


function Projects() {

    console.log(project1.title)
  return (
    <div className='projects-main'>
        <h2 className='projects-h2'>Projects<span className='point'>.</span></h2>
        <div className='projects-container'>
            <Project title={project1.title} subtitle={project1.subtitle} text={project1.text} image={project1.image} button_color={project1.button_color} github_link={project1.github_link} demo_link={project1.demo_link}/>
            <Project title={project2.title} subtitle={project2.subtitle} text={project2.text} image={project2.image} button_color={project2.button_color} github_link={project2.github_link} demo_link={project2.demo_link}/>
            <Project title={project3.title} subtitle={project3.subtitle} text={project3.text} image={project3.image} button_color={project3.button_color} github_link={project3.github_link} demo_link={project3.demo_link}/>
        </div>
    </div>
  )
}

export default Projects
