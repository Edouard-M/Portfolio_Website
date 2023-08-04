const section = {
    section:"Expériences",
    subtitle1:"Éducation",
    subtitle2:"Professionnel",
    download_button:"Télécharger CV",
}

var experience1 = {
    title:"ECE - Ecole d'ingénieurs",
    subtitle:"“Ecole Centrale d’Electronique” - 2018 - 2023",
    text:"",
    list: [{id: 1, text: "Développement WEB & logiciel"}, {id: 2, text: "Langages: Python / Java / C / C++ / HTML / CSS"}, {id: 3, text: "Gestion de projet Agile"}],
    image:"sg.png",
}

var experience2 = {
    title:"KNU - Échange Universitaire - Corée du Sud",
    subtitle:"Kyungpook National University (경북대학교) - 2021",
    text:"Notions d’intelligence artificielle - Théorie des graphes appliquée à l’AI - Développement Python - Développement FPGA en Verilog",
    list:[],
    image:"sg.png",
}

var experience3 = {
    title:"Programme sur le web design",
    subtitle:"San Francisco, États-Unis - 2020",
    text:"Design thinking en immersion à la silicon valley",
    list:[{id: 1, text: "Création et exposition d'une œuvre d'art interactive"}, {id: 2, text: "Cours de design thinking par des intervenants de la Silicon Valley"},],
    image:"sg.png",
}

var experience4 = {
    title:"Stage - Ingénieur Logiciel Web Backend",
    subtitle:"Société Générale - 6 mois",
    text:"Développement en production de nouvelles fonctionalités de la plateforme 'Database Management Services'",
    list:[{id: 1, text: "Développeur backend Python pour les services cloud"}, {id: 2, text: "Framework Backend: Flask"}, {id: 3, text: "Utilisation d'API REST"}, {id: 4, text: "Gestion de bases de données postgreSQL"}, {id: 5, text: "Tests et mocks des api dans une optique de TDD"},  {id: 6, text: "Environnement de production: Jenkins & Github actions"},],
    image:"sg.png",
}

var experience5 = {
    title:"Stage - Développeur Python",
    subtitle:"Airbus Defence and Space - 5 mois",
    text:"Développer un logiciel de traitement d’images dans le but de reconnaître et d’annoter automatiquement un dataset d’images satellites.",
    list:[{id: 1, text: "Mise en place d’un algorithme de Deep Learning destiné à la reconnaissance automatique de navires en mer"}, {id: 2, text: "Scripts Python pour modèles de données"}, {id: 3, text: "Développement Python d’un algorithme de traitement d’images"}, {id: 4, text: "Outils de gestion de projets : Notion, Google Collab"},],
    image:"airbus.png",
}

var experience6 = {
    title:"Stage - Consultant Junior IT",
    subtitle:"Wavestone - 2 mois",
    text:"Au sein de la practice “IT & Data Architecture” participation à la refonte du système SI d’une grande entreprise au cours de différentes missions :",
    list:[{id: 1, text: "Mise en œuvre d’un cahier des charges adéquat aux besoins du client"}, {id: 2, text: "Formation sur les bases du SI et des réseaux"}, {id: 3, text: "Autonomie et capacité d’adaptation au regard des différents clients"}],
    image:"wavestone.png",
}

var listData = [section, experience1, experience2, experience3, experience4, experience5, experience6]

exports.experiencesData = listData