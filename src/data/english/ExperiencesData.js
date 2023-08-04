const section = {
    section:"Experiences",
    subtitle1:"Education",
    subtitle2:"Professional",
    download_button:"Download Resume",
}

var experience1 = {
    title:"ECE - Engineering School",
    subtitle:"“Ecole Centrale d’Electronique” - 2018 - 2023",
    //text:"WEB development - Languages: Python / Java / C / C++ / HTML / CSS - Gestion de projet Agile",
    list: [{id: 1, text: "WEB & Software development"}, {id: 2, text: "Languages: Python / Java / C / C++ / HTML / CSS"}, {id: 3, text: "Agile project management"}],
    //list: [],
    image:"sg.png",
}

var experience2 = {
    title:"KNU - University Exchange - South Korea",
    subtitle:"Kyungpook National University (경북대학교) - 2021",
    text:"Basics of artificial intelligence - Graph theory applied to AI - Python development - FPGA development in Verilog",
    list:[],
    image:"sg.png",
}

var experience3 = {
    title:"Design Thinking Program",
    subtitle:"San Francisco, United States - 2020",
    text:"Design thinking immersion at silicon valley",
    list:[{id: 1, text: "Creation and exhibition of an interactive artwork"}, {id: 2, text: "Design thinking courses by speakers from Silicon Valley"},],
    image:"sg.png",
}

var experience4 = {
    title:"Intern - Backend Software Engineer",
    subtitle:"Société Générale - 6 months",
    text:"Development in production of new functionalities for the 'Database Management Services platform'",
    list:[{id: 1, text: "Python Backend developer for cloud services"}, {id: 2, text: "Backend Framework: Flask"},  {id: 3, text: "Use of REST APIs"}, {id: 4, text: "PostgreSQL database management"}, {id: 5, text: "Testing and mocking api from a TDD perspective"},  {id: 6, text: "Production environment: Jenkins & Github actions"},],
    image:"sg.png",
}

var experience5 = {
    title:"Intern - Python Developer",
    subtitle:"Airbus Defence and Space - 5 months",
    text:"Developing image processing software to automatically recognise and annotate a dataset of satellite images.",
    list:[{id: 1, text: "Implementation of a Deep Learning algorithm for the automatic recognition of ships at sea."}, {id: 2, text: "Developing Python scripts for data models"}, {id: 3, text: "Python development of an image processing algorithm"}, {id: 4, text: "Project management tools: Notion, Google Collab"},],
    image:"airbus.png",
}

var experience6 = {
    title:"Intern - IT Junior Consultant",
    subtitle:"Wavestone - 2 months",
    text:"As part of the “IT & Data Architecture“ practice, taking part in the redesign of a large company's IT system during various assignments:",
    list:[{id: 1, text: "Drawing up specifications that meet the customer's needs"}, {id: 2, text: "Training on the basics of IS and networks"}, {id: 3, text: "Autonomy and the ability to adapt to different customers"}],
    image:"wavestone.png",
}

var listData = [section, experience1, experience2, experience3, experience4, experience5, experience6]

exports.experiencesData = listData