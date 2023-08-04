const section = {
    section:"Expériences",
    subtitle1:"Education",
    subtitle2:"Professionnel",
    download_button:"Télécharger CV",
}

var experience1 = {
    title:"ECE - Ecole d'ingénieurs",
    subtitle:"“Ecole Centrale d’Electronique” - 2018 - 2023",
    text:"Développeur Web Backend de services cloud.",
    list: [{id: 1, text: "Developpement WEB"}, {id: 2, text: "Programmation Python / Java / C / C++ / HTML / CSS"}, {id: 3, text: "Gestion de projet Agile"}],
    image:"sg.png",
}

var experience2 = {
    title:"KNU - University Exchange - South Korea",
    subtitle:"Kyungpook National University (경북대학교) - 2021",
    text:"Notions d’intelligence artificielle - Théorie des graphes appliquée à l’AI - Développement Python - Développement FPGA en Verilog",
    list:[],
    image:"sg.png",
}

var experience3 = {
    title:"Design Thinking Program",
    subtitle:"San Francisco, United States",
    text:"Design thinking en immersion à la silicon valley",
    list:[{id: 1, text: "Creation and exhibition of an interactive artwork"}, {id: 2, text: "Design thinking courses by speakers from Silicon Valley"},],
    image:"sg.png",
}

var experience4 = {
    title:"Stage - Ingénieur Logiciel Web Backend",
    subtitle:"Société Générale - Paris",
    text:"Développeur Web Backend de services cloud.",
    list:[{id: 1, text: "Développement Python"}, {id: 2, text: "Sqlalchemy"}, {id: 3, text: "Flask"}, {id: 4, text: "Jenkins"}, {id: 5, text: "Gestion de bases de données postgreSQL"}, {id: 6, text: "Tests et mocks des api dans une optique de TDD"},],
    image:"sg.png",
}

var experience5 = {
    title:"Stage - Développeur Python",
    subtitle:"Airbus Defence and Space - Elancourt",
    text:"Développer un logiciel de traitement d’images dans le but de reconnaître et d’annoter automatiquement un dataset d’images satellites avec Airbus Defence and Space.",
    list:[{id: 1, text: "Développement Python d’un algorithme de traitement d’images"}, {id: 2, text: "Développement de scripts Python"}, {id: 3, text: "Mise en place d’un algorithme de Deep Learning destiné à la reconnaissance automatique de navires en mer"}, {id: 4, text: "Outils de gestion de projets : Notion, Google Collab"},],
    image:"airbus.png",
}

var experience6 = {
    title:"Stage - Consultant Junior IT",
    subtitle:"Wavestone - Paris",
    text:"Au sein de la practice “IT & Data Architecture” participation à la refonte du système SI d’une grande entreprise au cours de différentes missions :",
    list:[{id: 1, text: "Mise en œuvre d’un cahier des charges adéquat aux besoins du client"}, {id: 2, text: "Formation sur les bases du SI et des réseaux"}, {id: 3, text: "Autonomie et une capacité d’adaptation au regard des différents clients"}],
    image:"wavestone.png",
}

var listData = [section, experience1, experience2, experience3, experience4, experience5, experience6]

exports.experiencesData = listData