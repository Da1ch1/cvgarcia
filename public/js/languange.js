   const translations = {
        es: {
            greeting: "Hola! este es mi perfil de software y te invito a conocer mi experiencia en múltiples tecnologías, permiteme contarte que soy un desarrollador con un enfoque en la creación de soluciones eficientes y de alto rendimiento. Me apasiona el aprendizaje continuo y la resolución de problemas, y siempre busco mejorar mis habilidades y aportar valor en cada proyecto en el que participo.",
            skillstitle: "Habilidades",
            languagestitle: "Dominio de idiomas",
            languagesList: ["*italiano-intermedio", "*Ingles-básico", "*Frances-básico", "*Español-nativo"],
            profiletitle: "Perfil",
            greeting2: "Soy un desarrollador con experiencia en tecnologías web y móviles. Me enfoco en crear soluciones eficientes, optimizar el rendimiento y mejorar la experiencia del usuario en cada proyecto. Siempre busco aprender y aplicar nuevas técnicas para llevar mis habilidades al siguiente nivel.",
            trabajos: "He tenido la oportunidad de participar en distintos proyectos de desarrollo, y en alguno de ellos esta una pagina web del corporativo sie el cual me dio la oportunidad para trabajar en el proyecto.",
            trabajotitle: "Trabajos",
            empresas: "Empresas",
            esp: "Español",
            eng: "Ingles",
            ita: "Italiano",
            pro: "Proyectos",
            git: " Te presento algunos de los proyectos disponibles en mis repositorios de GitHub. Siéntete libre de explorarlos para conocer más sobre mi trabajo y las soluciones que he creado.",
            gitm: "En esta sección podrás explorar una selección de mis proyectos personales, que destacan mis habilidades y enfoque en el desarrollo de soluciones innovadoras. Aunque algunos de mis trabajos no están disponibles aquí debido a restricciones o proyectos privados, los proyectos presentados ofrecen una visión clara de mi capacidad técnica y experiencia.",
        },
        en: {
            greeting: "Hello! This is my software profile, and I invite you to explore my experience in multiple technologies. Allow me to tell you that I am a developer with a focus on creating efficient, high-performance solutions. I am passionate about continuous learning and problem-solving, and I am always looking to improve my skills and add value to every project I participate in.",
            skillstitle: "Skills",
            languagestitle: "Language Proficiency",
            languagesList: ["*Italian-intermediate", "*English-basic", "*French-basic", "*Spanish-native"],
            profiletitle: "Profile",
            greeting2: "I am a developer with experience in web and mobile technologies. I focus on creating efficient solutions, optimizing performance, and enhancing the user experience in every project. I am always looking to learn and apply new techniques to take my skills to the next level.",
            trabajos: "I have had the opportunity to participate in various development projects, and one of them is a corporate website for SIE, which gave me the opportunity to work on the project.",
            trabajotitle: "Works",
            empresas: "Companies",
            esp: "Spanish",
            eng: "English",
            ita: "Italian",
            pro: "Projects",
            git: "I present to you some of the projects available in my GitHub repositories. Feel free to explore them to learn more about my work and the solutions I have created.",
            gitm: "In this section, you can explore a selection of my personal projects, showcasing my skills and focus on developing innovative solutions. Although some of my work is not available here due to restrictions or private projects, the presented projects offer a clear view of my technical capabilities and experience.",
        },
        it: {
            greeting: "Ciao! Questo è il mio profilo software e ti invito a esplorare la mia esperienza in diverse tecnologie. Permettimi di dirti che sono uno sviluppatore con un focus sulla creazione di soluzioni efficienti e ad alte prestazioni. Sono appassionato di apprendimento continuo e risoluzione dei problemi, e cerco sempre di migliorare le mie competenze e aggiungere valore a ogni progetto a cui partecipo.",
            skillstitle: "Competenze",
            languagestitle: "Proficienza Linguistica",
            languagesList: ["*Italiano-avanzato", "*Inglese-base", "*Francese-base", "*Spagnolo-nativo"],
            profiletitle: "Profilo",
            greeting2: "Sono uno sviluppatore con esperienza in tecnologie web e mobili. Mi concentro sulla creazione di soluzioni efficienti, sull'ottimizzazione delle prestazioni e sul miglioramento dell'esperienza dell'utente in ogni progetto. Cerco sempre di imparare e applicare nuove tecniche per portare le mie competenze al livello successivo.",
            trabajos: "Ho avuto l'opportunità di partecipare a vari progetti di sviluppo, e uno di questi è un sito web aziendale per SIE, che mi ha dato l'opportunità di lavorare su questo progetto.",
            trabajotitle: "Lavori",
            empresas: "Aziende",
            esp: "Spagnolo",
            eng: "Inglese",
            ita: "Italiano",
            pro: "Progetti",
            git: "Ti presento alcuni dei progetti disponibili nei miei repository su GitHub. Sentiti libero di esplorarli per conoscere meglio il mio lavoro e le soluzioni che ho creato.",
            gitm: "In questa sezione potrai esplorare una selezione dei miei progetti personali, che mettono in evidenza le mie competenze e l'approccio nello sviluppo di soluzioni innovative. Sebbene alcuni dei miei lavori non siano disponibili qui a causa di restrizioni o progetti privati, i progetti presentati offrono una visione chiara delle mie capacità tecniche e della mia esperienza.",
        }
    };
document.getElementById('languageSelector').addEventListener('change', function() {
    const selectedLanguage = this.value;
    // Cambia el contenido de los textos de acuerdo al idioma seleccionado
    document.querySelector('.gitm').textContent = translations[selectedLanguage].gitm;
    document.querySelector('.git').textContent = translations[selectedLanguage].git;
    document.querySelector('.pro').textContent = translations[selectedLanguage].pro;
    document.querySelector('.ita').textContent = translations[selectedLanguage].ita;
    document.querySelector('.eng').textContent = translations[selectedLanguage].eng;
    document.querySelector('.esp').textContent = translations[selectedLanguage].esp;
    document.querySelector('.empresas').textContent = translations[selectedLanguage].empresas;
    document.querySelector('.trabajotitle').textContent = translations[selectedLanguage].trabajotitle;
    document.querySelector('.trabajos').textContent = translations[selectedLanguage].trabajos;
    document.querySelector('.profiletitle').textContent = translations[selectedLanguage].profiletitle;
    document.querySelector('.greeting').textContent = translations[selectedLanguage].greeting;
    document.querySelector('.skillstitle').textContent = translations[selectedLanguage].skillstitle;
    document.querySelector('.languagestitle').textContent = translations[selectedLanguage].languagestitle;
    
    document.querySelector('.greeting2').textContent = translations[selectedLanguage].greeting2;

    const languagesListElement = document.querySelector('.languages-list');
    languagesListElement.innerHTML = ''; // Limpia la lista de idiomas
    translations[selectedLanguage].languagesList.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        languagesListElement.appendChild(li);
    });
});

document.addEventListener("contextmenu", function (e) {
    if (e.target.tagName === "IMG") {
      e.preventDefault();
    }
  });