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
    list:[{id: 1, text: "Python Backend developer for cloud services"}, {id: 2, text: "Backend Framework: Flask"},  {id: 3, text: "Use of ORM: Sqlalchemy"}, {id: 4, text: "PostgreSQL database management"}, {id: 5, text: "Testing and mocking api from a TDD perspective"},  {id: 6, text: "Production environment: Jenkins & Github actions"},],
    image:"sg.png",
}

var experience5 = {
    title:"Intern - Python Developer",
    subtitle:"Airbus Defence and Space - 5 months",
    text:"Développer un logiciel de traitement d’images dans le but de reconnaître et d’annoter automatiquement un dataset d’images satellites avec Airbus Defence and Space.",
    list:[{id: 1, text: "Développement Python d’un algorithme de traitement d’images"}, {id: 2, text: "Développement de scripts Python"}, {id: 3, text: "Mise en place d’un algorithme de Deep Learning destiné à la reconnaissance automatique de navires en mer"}, {id: 4, text: "Outils de gestion de projets : Notion, Google Collab"},],
    image:"airbus.png",
}

var experience6 = {
    title:"Intern - IT Junior Consultant",
    subtitle:"Wavestone - 2 months",
    text:"Au sein de la practice “IT & Data Architecture” participation à la refonte du système SI d’une grande entreprise au cours de différentes missions :",
    list:[{id: 1, text: "Mise en œuvre d’un cahier des charges adéquat aux besoins du client"}, {id: 2, text: "Formation sur les bases du SI et des réseaux"}, {id: 3, text: "Autonomie et une capacité d’adaptation au regard des différents clients"}],
    image:"wavestone.png",
}

var listData = [section, experience1, experience2, experience3, experience4, experience5, experience6]

exports.experiencesData = listData