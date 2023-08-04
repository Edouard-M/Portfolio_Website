const section = "Projets"

const project1 = {
    title: "Shipmark",
    subtitle: "Projet avec Airbus D&S",
    text: "Ce projet vise à détecter les navires en mer afin d'identifier leur position et leur direction. Il utilise Python et la technologie de Machine Learning avec Airbus D&S.",
    image: "shipmark.png",
    button_color: "#C7E4F5",
    github_link: "https://github.com/Edouard-M/Shipmark-satellite-image-processing",
    demo_link: "/shipmark/",
    demo_button: "Ouvrir Demo",
};

const project2 = {
    title: "App Supermaché",
    subtitle: "Projet étudiant",
    text: "Ce projet vise à créer l'infrastructure informatique complète d'un marché. En utilisant des compétences Backend et Frontend apprises en cours (Note : 19.5/20)",
    image: "market.png",
    button_color: "#E9A072",
    github_link: "https://github.com/Edouard-M/School-Java-Market-Project",
    demo_link: "https://github.com/Edouard-M/School-Java-Market-Project",
   // demo_link: "/marketapp/",
   demo_button: "Ouvrir Demo",
};

const project3 = {
    title: "Jet Flight",
    subtitle: "Projet personnel",
    text: "Jet Flight est une simulation qui vise à recréer la sensation de piloter un avion de chasse avec des commandes de vol amusantes et accessibles basées sur le modèle physique réel.",
    image: "jet-flight.png",
    button_color: "#73BBC5",
    github_link: "https://github.com/Edouard-M",
    demo_link: "https://jet-flight.fr/",
    demo_button: "Ouvrir Demo",
};

var listData = [section, project1, project2, project3]

exports.projectsData = listData