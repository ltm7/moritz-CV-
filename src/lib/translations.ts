export type Locale = "de" | "fr" | "en";

export const translations = {
  // ─── NAVBAR ────────────────────────────────────────────────
  nav: {
    about: { de: "Über mich", fr: "À propos", en: "About" },
    skills: { de: "Kompetenzen", fr: "Compétences", en: "Skills" },
    portfolio: { de: "Portfolio", fr: "Portfolio", en: "Portfolio" },
    education: { de: "Ausbildung", fr: "Formation", en: "Education" },
    contact: { de: "Kontakt", fr: "Contact", en: "Contact" },
    downloadCV: { de: "Lebenslauf", fr: "Télécharger CV", en: "Download CV" },
  },

  // ─── HERO ──────────────────────────────────────────────────
  hero: {
    title: { de: "Maschinenbau-Student", fr: "Étudiant en Génie Mécanique", en: "Mechanical Engineering Student" },
    hireMe: { de: "Kontaktieren", fr: "Engagez-moi", en: "Hire Me" },
    downloadCV: { de: "Lebenslauf herunterladen", fr: "Télécharger le CV", en: "Download CV" },
    scroll: { de: "Scrollen", fr: "Défiler", en: "Scroll" },
  },

  // ─── ABOUT ─────────────────────────────────────────────────
  about: {
    sectionTag: { de: "Lernen Sie mich kennen", fr: "Apprenez à me connaître", en: "Get to know me" },
    sectionTitle1: { de: "Über", fr: "À propos de", en: "About" },
    sectionTitle2: { de: "mich", fr: "moi", en: "Me" },
    hello: { de: "Hallo!", fr: "Bonjour !", en: "Hello!" },
    paragraph1: {
      de: "Mein Name ist Moritz Leter Tchapder. Ich studiere Maschinenbau. Strategisches Denken, Genauigkeit und organisatorische Fähigkeiten zähle ich zu meinen besonderen Stärken.",
      fr: "Je m'appelle Moritz Leter Tchapder. Je suis étudiant en génie mécanique. La réflexion stratégique, la précision et les compétences organisationnelles sont des forces que je considère spécifiques.",
      en: "My name is Moritz Leter Tchapder. I am a student studying mechanical engineering. I consider strategic thinking, accuracy and organizational skills to be specific strengths of mine.",
    },
    paragraph2: {
      de: "Ehrgeizig, flexibel und teamfähig sehe ich Aufgaben als Herausforderungen und nehme sie gerne an. Ich habe ein starkes Interesse an der Konstruktion von Mechanismen und Strukturen. Ursprünglich leidenschaftlich für die Entwicklung mechanischer und elektrischer Produkte, interessiere ich mich auch sehr für die Produktionssysteme sowie die dazu verbundene aktuelle Herausforderungen.",
      fr: "Ambitieux, flexible et joueur d'équipe, je considère les tâches comme des défis et les accepte volontiers. J'ai un fort intérêt pour la conception de mécanismes et de structures. Passionné à l'origine par le développement de produits mécaniques et électriques, je m'intéresse également beaucoup aux systèmes de production ainsi qu'aux défis actuels qui y sont liés.",
      en: "Ambitious, flexible and a team player, I see tasks as challenges and gladly accept them. I have a strong interest in designing mechanisms and structures. Originally passionate about the development of mechanical and electrical products, I am also very interested in production systems and the current challenges associated with them.",
    },
    paragraph3: {
      de: "Als sehr engagierte Person ist es mein Ziel, mein Know-how und meine Fähigkeiten weiterzuentwickeln. Diese Website wurde erstellt, um ausgewählte Projekte zu präsentieren. Schauen Sie sich gerne meinen Lebenslauf an und kontaktieren Sie mich.",
      fr: "En tant que personne très engagée, mon objectif est de développer davantage mon savoir-faire et mes compétences. Ce site web a été créé pour présenter des projets sélectionnés. N'hésitez pas à consulter mon CV et à me contacter.",
      en: "As a very committed person, it is my aim to further develop my know-how and skills. This website was created to present selected projects. Feel free to see my resume and contact me if you are interested.",
    },
    basicInfo: { de: "Persönliche Daten", fr: "Informations Personnelles", en: "Basic Information" },
    age: { de: "Alter", fr: "Âge", en: "Age" },
    email: { de: "E-Mail", fr: "E-mail", en: "Email" },
    phone: { de: "Telefon", fr: "Téléphone", en: "Phone" },
    address: { de: "Adresse", fr: "Adresse", en: "Address" },
    languages: { de: "Sprachen", fr: "Langues", en: "Languages" },
    languagesValue: { de: "Französisch, Englisch, Deutsch", fr: "Français, Anglais, Allemand", en: "French, English, German" },
  },

  // ─── SKILLS ────────────────────────────────────────────────
  skills: {
    sectionTag: { de: "Was ich kann", fr: "Ce que je sais faire", en: "What I can do" },
    sectionTitle1: { de: "Professionelle", fr: "Compétences", en: "Professional" },
    sectionTitle2: { de: "Kompetenzen", fr: "Professionnelles", en: "Skills" },
    programming: { de: "Programmierung", fr: "Programmation", en: "Programming" },
    engineering: { de: "Ingenieurwesen & Tools", fr: "Ingénierie & Outils", en: "Engineering & Tools" },
  },

  // ─── PORTFOLIO ─────────────────────────────────────────────
  portfolio: {
    sectionTag: { de: "Meine Arbeit", fr: "Mon travail", en: "My Work" },
    sectionTitle1: { de: "Ausgewähltes", fr: "Portfolio", en: "Featured" },
    sectionTitle2: { de: "Portfolio", fr: "en vedette", en: "Portfolio" },
    tabProgramming: { de: "Programmierung", fr: "Programmation", en: "Programming" },
    tabEngineering: { de: "Ingenieurwesen", fr: "Ingénierie", en: "Engineering" },
    tabReports: { de: "Berichte & Zertifikate", fr: "Rapports & Certificats", en: "Reports & Certs" },
    projects: {
      b2b: {
        title: { de: "Webseite für B2B-Unternehmen", fr: "Site web B2B Consulting", en: "B2B Consulting Website" },
        description: {
          de: "Eine statische Webseite für ein B2B-Beratungsunternehmen, das Kunden bei der Optimierung ihrer Produktionsprozesse unterstützt.",
          fr: "Un site web statique conçu pour une entreprise de conseil B2B aidant ses clients à optimiser leurs processus de production.",
          en: "A static website built for a B2B consulting company helping clients optimize their production processes.",
        },
      },
      mechashop: {
        title: { de: "MechaShop – Online-Shop", fr: "MechaShop – Boutique en ligne", en: "MechaShop – Online Store" },
        description: {
          de: "Full-Stack E-Commerce-Plattform für mechanische Werkzeuge mit Admin-Panel, CRUD-Operationen und MySQL-Datenbank.",
          fr: "Plateforme e-commerce full-stack pour outils mécaniques avec panneau admin, opérations CRUD et base de données MySQL.",
          en: "Full-stack e-commerce platform for mechanical tools with admin panel, CRUD operations and MySQL database.",
        },
      },
      mindstorms: {
        title: { de: "Mindstorms-Roboter", fr: "Robot Mindstorms", en: "Mindstorms Robot" },
        description: {
          de: "Pick-and-Place-Robotersteuerung, entwickelt in Java für einen Lego Mindstorms Roboter.",
          fr: "Système de contrôle Pick and Place développé en Java pour un robot Lego Mindstorms.",
          en: "Pick and Place robot control system developed in Java for a Lego Mindstorms robot.",
        },
      },
      zapfanlage: {
        title: { de: "Zapfanlage (CAD-Design)", fr: "Système de tirage (CAD)", en: "Tap System (CAD Design)" },
        description: {
          de: "Komplette mechanische Konstruktion einer Zapfanlage für 5-Liter-Fässer mit NX Siemens.",
          fr: "Conception mécanique complète d'un système de tirage pour fûts de 5 litres avec NX Siemens.",
          en: "Complete mechanical design of a draft beer tap system for 5-liter barrels using NX Siemens.",
        },
      },
      printer3d: {
        title: { de: "5-Achsen-3D-Drucker", fr: "Imprimante 3D 5 axes", en: "5-Axis 3D Printer" },
        description: {
          de: "Universitäres Forschungsprojekt zur Entwicklung eines ressourceneffizienten 5-Achsen-3D-Drucksystems.",
          fr: "Projet de recherche universitaire développant un système d'impression 3D 5 axes économe en ressources.",
          en: "University research project developing a resource-efficient 5-axis 3D printing system.",
        },
      },
      fahrzeug: {
        title: { de: "Fahrzeugdesign und Prototyp", fr: "Conception de véhicule et prototype", en: "Vehicle Design and Prototype" },
        description: {
          de: "3D-gedruckter Gummiband-LKW mit Getriebe und Achssystem, entworfen mit SolidWorks an der FH Dortmund.",
          fr: "Camion à élastique imprimé en 3D avec système d'engrenages et d'essieux, conçu avec SolidWorks à la FH Dortmund.",
          en: "3D-printed rubber-band powered truck with gear and axle system, designed using SolidWorks at FH Dortmund.",
        },
      },
      produktionsplanung: {
        title: { de: "Produktionsplanungssystem", fr: "Système de planification de production", en: "Production Planning System" },
        description: {
          de: "Strukturiertes Excel-Tool zur Produktionsplanung in der Endmontage von Motoren. Verknüpfung von Aufträgen, Prozesszeiten und OEE-Kennzahlen.",
          fr: "Outil Excel structuré pour la planification de la production en assemblage final de moteurs. Liaison entre commandes, temps de processus et indicateurs OEE.",
          en: "Structured Excel tool for production planning in engine final assembly. Linking orders, process times and OEE indicators.",
        },
      },
      report3m: {
        title: { de: "Arbeitsbericht bei 3M", fr: "Rapport de travail chez 3M", en: "Work Report at 3M" },
        description: {
          de: "Detaillierter Bericht über Aufgaben und Verantwortlichkeiten als Werkstudent bei 3M Wuppertal.",
          fr: "Rapport détaillé sur les fonctions et responsabilités en tant qu'étudiant salarié chez 3M Wuppertal.",
          en: "Detailed report covering duties and responsibilities during the working student position at 3M Wuppertal.",
        },
      },
      certifications: {
        title: { de: "Zertifizierungen", fr: "Certifications", en: "Certifications" },
        description: {
          de: "Sammlung professioneller Zertifizierungen: IIoT-Minikurs und CAD-Zertifikat.",
          fr: "Collection de certifications professionnelles : mini-cours IIoT et certificat CAD.",
          en: "Collection of professional certifications including IIoT Minicourse and CAD Certificate.",
        },
      },
    },
  },

  // ─── EDUCATION ─────────────────────────────────────────────
  education: {
    sectionTag: { de: "Mein Werdegang", fr: "Mon parcours", en: "My Journey" },
    sectionTitle1: { de: "Akademischer", fr: "Parcours", en: "Academic" },
    sectionTitle2: { de: "Werdegang", fr: "Académique", en: "Background" },
    timeline: [
      {
        period: { de: "Sept. 2009 – Juni 2012", fr: "Sept. 2009 – Juin 2012", en: "Sept 2009 – June 2012" },
        title: { de: "Gymnasium François Xavier Vogt", fr: "Lycée François Xavier Vogt", en: "High School François Xavier Vogt" },
        subtitle: { de: "Yaoundé, Kamerun", fr: "Yaoundé, Cameroun", en: "Yaoundé, Cameroon" },
        description: {
          de: "Besuch dieses renommierten Gymnasiums in den ersten drei Jahren mit einer soliden akademischen Grundlage.",
          fr: "Fréquentation de ce lycée prestigieux pendant les trois premières années, avec une base académique solide.",
          en: "Attended this prestigious high school for the first three years, building a strong academic foundation.",
        },
      },
      {
        period: { de: "Sept. 2012 – Juni 2016", fr: "Sept. 2012 – Juin 2016", en: "Sept 2012 – June 2016" },
        title: { de: "Gymnasium Saint Jean Baptiste de Bangangté", fr: "Lycée Saint Jean Baptiste de Bangangté", en: "High School Saint Jean Baptiste de Bangangté" },
        subtitle: { de: "Abitur in Mathematik & Physik", fr: "Baccalauréat en Mathématiques & Physique", en: "High-school diploma in Mathematics & Physics" },
        description: {
          de: "Schwerpunkt auf Naturwissenschaften, Mathematik und Physik. Das letzte Jahr war eine intensive Vorbereitung auf die Universität.",
          fr: "Spécialisé en sciences, mathématiques et physique. La dernière année fut une préparation intense à l'entrée à l'université.",
          en: "Focused on science, mathematics and physics. The final year was an intense preparation for university entrance.",
        },
      },
      {
        period: { de: "Sept. 2016 – Nov. 2017", fr: "Sept. 2016 – Nov. 2017", en: "Sept 2016 – Nov 2017" },
        title: { de: "Goethe-Institut Kamerun", fr: "Goethe Institut Cameroun", en: "Goethe Institut Cameroon" },
        subtitle: { de: "Deutsche Sprache – TestDaF 4×4", fr: "Langue Allemande – TestDaF 4×4", en: "German Language – TestDaF 4×4" },
        description: {
          de: "Intensives Deutschstudium über ein Jahr (ZiDaF → B2 Zertifikat → TestDaF 4×4). Vertiefte Kenntnisse der deutschen Sprache und Kultur erworben.",
          fr: "Étude intensive de l'allemand pendant un an (ZiDaF → Certificat B2 → TestDaF 4×4). Connaissance approfondie de la langue et la culture allemandes.",
          en: "Studied German intensively for one year (ZiDaF → B2 Zertifikat → TestDaF 4×4). Gained deep knowledge of German language and culture.",
        },
      },
      {
        period: { de: "Sept. 2018 – Heute", fr: "Sept. 2018 – Aujourd'hui", en: "Sept 2018 – Present" },
        title: { de: "RWTH Aachen und FH Dortmund", fr: "RWTH Aachen et FH Dortmund", en: "RWTH Aachen and FH Dortmund" },
        subtitle: { de: "Bachelor Maschinenbau", fr: "Bachelor en Génie Mécanique", en: "Bachelor of Mechanical Engineering" },
        description: {
          de: "Vertiefung in Produktionstechnik: Fertigungstechnik, Fabrikplanung, Werkzeugmaschinen. Verbindung von Ingenieurwesen mit interdisziplinären und zukunftsorientierten Projekten.",
          fr: "Spécialisation en ingénierie de production : technologie de fabrication, planification d'usine, machines-outils. Combinaison d'ingénierie avec des projets interdisciplinaires et tournés vers l'avenir.",
          en: "Specializing in production engineering: manufacturing technology, factory planning, machine tools. Combining engineering with interdisciplinary and future-oriented projects.",
        },
      },
      {
        period: { de: "Sept. 2019 – Heute", fr: "Sept. 2019 – Aujourd'hui", en: "Sept 2019 – Present" },
        title: { de: "Kompetenzentwicklung", fr: "Développement de compétences", en: "Skills Development" },
        subtitle: { de: "Kontinuierliches Lernen", fr: "Apprentissage continu", en: "Continuous Learning" },
        description: {
          de: "Entwicklung neuer Kompetenzen in den Bereichen Fertigung, Programmierung, CAD-Design, AI-Tools und Digitalisierung der Produktion.",
          fr: "Développement de nouvelles compétences en fabrication, programmation, conception CAO, outils IA et digitalisation de la production.",
          en: "Developing new skills across manufacturing, programming, CAD design, AI tools and digitalization of production.",
        },
      },
    ],
  },

  // ─── CONTACT ───────────────────────────────────────────────
  contact: {
    sectionTag: { de: "Verbinden wir uns", fr: "Connectons-nous", en: "Let's connect" },
    sectionTitle1: { de: "Kontakt", fr: "Prendre", en: "Get In" },
    sectionTitle2: { de: "aufnehmen", fr: "Contact", en: "Touch" },
    address: { de: "Adresse", fr: "Adresse", en: "Address" },
    phone: { de: "Telefon", fr: "Téléphone", en: "Phone" },
    email: { de: "E-Mail", fr: "E-mail", en: "Email" },
    sendEmail: { de: "E-Mail senden", fr: "Envoyer un e-mail", en: "Send me an Email" },
  },

  // ─── FOOTER ────────────────────────────────────────────────
  footer: {
    rights: { de: "Alle Rechte vorbehalten.", fr: "Tous droits réservés.", en: "All rights reserved." },
  },

  // ─── PROJECT PAGES ─────────────────────────────────────────
  projectPages: {
    backToPortfolio: { de: "Zurück zum Portfolio", fr: "Retour au Portfolio", en: "Back to Portfolio" },
    description: { de: "Beschreibung", fr: "Description", en: "Description" },
    resources: { de: "Ressourcen", fr: "Ressources", en: "Resources" },
    clickToDownload: { de: "Klicken zum Herunterladen (PDF)", fr: "Cliquer pour télécharger (PDF)", en: "Click to download PDF" },
    openLink: { de: "Externen Link öffnen", fr: "Ouvrir le lien externe", en: "Open external link" },

    b2b: {
      title: { de: "Webseite für B2B-Unternehmen", fr: "Site web B2B Consulting", en: "B2B Consulting Website" },
      subtitle: { de: "Webentwicklung — SS 2020", fr: "Développement Web — SS 2020", en: "Web Development — SS 2020" },
      description: {
        de: "Diese statische Webseite wurde für ein B2B-Beratungsunternehmen erstellt. Die Webseite dient als Vorlage für Unternehmen, die ihren Kundenunternehmen (Partnerunternehmen) helfen, Lösungen zur Optimierung und Verbesserung ihrer Produktionsprozesse zu finden. Die Seite wurde mit HTML, CSS, JavaScript und Bootstrap erstellt und zeigt ein sauberes Design mit responsivem Layout.",
        fr: "Ce site web statique a été conçu pour une entreprise de conseil B2B. Le site sert de modèle pour les entreprises qui aident leurs clients à trouver des solutions pour optimiser et améliorer leurs processus de production. Le site a été construit avec HTML, CSS, JavaScript et Bootstrap.",
        en: "This is a static website designed for a B2B consulting company. The website serves as a template for businesses that help their client companies find solutions to optimize and improve their production processes. The site was built using HTML, CSS, JavaScript, and Bootstrap.",
      },
      videoLabel: { de: "Übersichtsvideo der Webseite", fr: "Vidéo de présentation du site", en: "Website Overview Video" },
    },
    java: {
      title: { de: "Mindstorms-Roboter — Pick & Place", fr: "Robot Mindstorms — Pick & Place", en: "Mindstorms Robot — Pick & Place" },
      subtitle: { de: "Java-Robotik — WS 2019/20", fr: "Robotique Java — WS 2019/20", en: "Java Robotics — WS 2019/20" },
      description: {
        de: "Ziel dieses Projekts war es, eine \"Pick and Place\"-Steuerung zu entwickeln, wie sie in der Industrie vielfach angewendet wird. Dafür benötigten wir ein Spielfeld, zwei Gummiringe, zwei Bälle unterschiedlicher Farbe, einen Roboter und ein Netzteil mit USB-Kabel.\n\nZuerst mussten wir ein Konzept überlegen, um die geforderte Funktionalität zu erhalten. Anschließend haben wir unsere Lösung in Java implementiert und getestet.",
        fr: "L'objectif de ce projet était de développer un système de contrôle « Pick and Place », similaire à ceux largement utilisés dans l'industrie. Pour cela, nous avions besoin d'un terrain de jeu, de deux anneaux en caoutchouc, de deux balles de couleurs différentes, d'un robot et d'une alimentation avec câble USB.\n\nNous avons d'abord développé un concept, puis implémenté et testé notre solution en Java.",
        en: "The goal of this project was to develop a \"Pick and Place\" control system, similar to those widely used in industry. For this, we needed a playing field, two rubber rings, two balls of different colors, a robot, and a power supply with USB cable.\n\nFirst, we developed a concept to achieve the required functionality. Then we implemented and tested our solution using Java.",
      },
      videoLabel: { de: "Roboter-Demo-Video", fr: "Vidéo de démonstration du robot", en: "Robot Demo Video" },
    },
    nx: {
      title: { de: "Zapfanlage (CAD-Konstruktion)", fr: "Système de tirage (Conception CAO)", en: "Tap System Design (Zapfanlage)" },
      subtitle: { de: "Mechanische Konstruktion — SS 2019", fr: "Conception Mécanique — SS 2019", en: "Mechanical Design — SS 2019" },
      description: {
        de: "Mit Siemens NX habe ich die Komponenten einer Zapfanlage für handelsübliche 5-Liter-Fässchen konstruiert und zusammengebaut. Der für das Zapfen nötige Druck wird aus einer 16g-Kohlensäure-Kapsel gewonnen. Die Reduktion auf den Zapfdruck erfolgt über den einstellbaren Druckminderer. Über einen Stechdegen wird das Fass unter Druck gesetzt und die Flüssigkeit gefördert.\n\nMit NX Siemens kann ich auch technische Zeichnungen und Explosionsansichten herstellen.",
        fr: "Avec Siemens NX, j'ai conçu et assemblé les composants d'un système de tirage pour des fûts standard de 5 litres. La pression nécessaire provient d'une capsule de CO₂ de 16 g. La réduction de pression se fait par le détendeur réglable. Un perce-fût met le fût sous pression et délivre le liquide.\n\nAvec NX Siemens, je peux également créer des dessins techniques et des vues éclatées.",
        en: "Using Siemens NX, I designed and assembled the components of a draft beer tap system for standard 5-liter barrels. The pressure required for dispensing is generated from a 16g CO₂ cartridge. Pressure reduction is achieved through the adjustable pressure reducer. A piercing lance pressurizes the barrel and delivers the liquid.\n\nWith NX Siemens, I also created technical drawings and exploded views.",
      },
    },
    print3d: {
      title: { de: "5-Achsen-3D-Drucker-Entwicklung", fr: "Développement imprimante 3D 5 axes", en: "5-Axis 3D Printer Development" },
      subtitle: { de: "Universitätsforschung — SS 2021", fr: "Recherche universitaire — SS 2021", en: "University Research — SS 2021" },
      description: {
        de: "Trotz der großen Vorzüge der additiven Fertigung fallen ungefähr 70 % der Kosten für die Nacharbeit an. Damit der 3D-Druck weiterhin in den Massenmarkt vordringen kann, muss die Technologie weiter ausgebaut werden.\n\nIn einem Team von 3 Studenten arbeite ich an der zukunftsweisenden Entwicklung und Anwendung additiver Fertigungssysteme. Das Ziel eines ressourceneffizienten Drucks mit einem 5-Achssystem ist elementar, um den 3D-Druck zu einem ausgereiften Produktionssystem zu entwickeln.",
        fr: "Malgré les grands avantages de la fabrication additive, environ 70 % des coûts sont liés au post-traitement. Pour que l'impression 3D continue de pénétrer le marché de masse, la technologie doit être développée.\n\nDans une équipe de 3 étudiants, je travaille sur le développement d'avant-garde de systèmes de fabrication additive. L'objectif d'une impression économe en ressources avec un système 5 axes est fondamental.",
        en: "Despite the great advantages of additive manufacturing, approximately 70% of costs are incurred in post-processing. For 3D printing to continue advancing into the mass market, the technology must be further developed.\n\nIn a team of 3 students, I am working on the future-oriented development of additive manufacturing systems. The goal of resource-efficient printing with a 5-axis system is fundamental to evolving 3D printing into a mature production system.",
      },
    },
    php: {
      title: { de: "MechaShop – Online-Shop", fr: "MechaShop – Boutique en ligne", en: "MechaShop – Online Store" },
      subtitle: { de: "Full-Stack-Entwicklung — SS 2020", fr: "Développement Full-Stack — SS 2020", en: "Full-Stack Development — SS 2020" },
      description: {
        de: "MechaShop ist eine Full-Stack E-Commerce-Plattform für den Verkauf mechanischer Werkzeuge und Komponenten. Die Anwendung verfügt über ein komplettes Admin-Panel mit CRUD-Operationen, eine benutzerfreundliche Produktbrowsing-Oberfläche und ein MySQL-Datenbank-Backend.\n\nDas Projekt demonstriert praktische Fähigkeiten in serverseitiger Programmierung mit PHP, Datenbankdesign und responsiver Frontend-Entwicklung.",
        fr: "MechaShop est une plateforme e-commerce full-stack pour la vente d'outils et composants mécaniques. L'application dispose d'un panneau d'administration complet avec opérations CRUD, une interface de navigation produits conviviale et un backend MySQL.\n\nLe projet démontre des compétences en programmation côté serveur avec PHP, en conception de bases de données et en développement frontend responsive.",
        en: "MechaShop is a full-stack e-commerce platform built for selling mechanical tools and components. The application features a complete admin panel with CRUD operations, user-friendly product browsing interface, and a MySQL database backend.\n\nThe project demonstrates practical skills in server-side programming with PHP, database design, and responsive front-end development.",
      },
    },
    fahrzeug: {
      title: { de: "Fahrzeugdesign und Prototyp", fr: "Conception de véhicule et prototype", en: "Vehicle Design and Prototype" },
      subtitle: { de: "Konstruktion & 3D-Druck — FH Dortmund", fr: "Conception & Impression 3D — FH Dortmund", en: "Design & 3D Printing — FH Dortmund" },
      description: {
        de: "Dieses Projekt umfasst den Entwurf, die Konstruktion und den 3D-Druck eines gummibandgetriebenen LKW-Modells. Das Fahrzeug wurde vollständig in SolidWorks konstruiert und mit einem FDM-3D-Drucker gefertigt.\n\nDas Antriebssystem basiert auf einem Gummiband, das über ein Zahnradsystem und eine Achskonstruktion die Hinterräder antreibt. Der Prototyp demonstriert Prinzipien der Mechanik, Getriebetechnik und des parametrischen CAD-Designs.\n\nAlle Bauteile wurden als STL-Dateien exportiert und können mit handelsüblichen 3D-Druckern reproduziert werden.",
        fr: "Ce projet comprend la conception, la modélisation et l'impression 3D d'un modèle de camion propulsé par un élastique. Le véhicule a été entièrement conçu dans SolidWorks et fabriqué avec une imprimante 3D FDM.\n\nLe système de propulsion repose sur un élastique qui entraîne les roues arrière via un système d'engrenages et d'essieux. Le prototype démontre les principes de la mécanique, de la transmission et de la conception CAO paramétrique.\n\nToutes les pièces ont été exportées en fichiers STL et peuvent être reproduites avec des imprimantes 3D standard.",
        en: "This project involves the design, modeling and 3D printing of a rubber-band powered truck model. The vehicle was fully designed in SolidWorks and manufactured using an FDM 3D printer.\n\nThe propulsion system uses a rubber band that drives the rear wheels through a gear and axle system. The prototype demonstrates principles of mechanics, gear transmission and parametric CAD design.\n\nAll components were exported as STL files and can be reproduced with standard 3D printers.",
      },
    },
    produktionsplanung: {
      title: { de: "Produktionsplanungssystem (Excel)", fr: "Système de planification de production (Excel)", en: "Production Planning System (Excel)" },
      subtitle: { de: "Excel & Produktionsplanung", fr: "Excel & Planification de production", en: "Excel & Production Planning" },
      description: {
        de: "Annahme: Wir stellen Motoren für verschiedene Autohersteller her.\n\nDiese Excel-Datei stellt ein strukturiertes Werkzeug zur Produktionsplanung dar, das in der Endmontage eingesetzt wird. Es handelt sich um ein umfassendes System, das verschiedene Informationen miteinander verknüpft, um die Produktion effizient zu organisieren.\n\nDas Tabellenblatt „Aufträge" bildet die Grundlage der Planung mit Produktionsaufträgen, Produktnummern, Zeitfenstern und verfügbaren Arbeitszeiten.\n\nDie Tabelle „Prozesszeit" liefert wichtige technische Informationen über die Dauer der Herstellung einzelner Produkte, entscheidend für die Kapazitätsberechnung.\n\nIm Tabellenblatt „Bestellung_Produktionsdatum" werden die Aufträge zeitlich eingeordnet und mit konkreten Produktionsdaten und Uhrzeiten verbunden.\n\nDas Tabellenblatt „Planning" ist das zentrale Element: ein detaillierter Produktionskalender, der alle Informationen zusammenführt.\n\nDie Tabelle „APE und OEE" dient der Bewertung der Produktionsleistung mit Kennzahlen wie der OEE (Overall Equipment Effectiveness).\n\nDieses Projekt wurde auch durchgeführt, um meine Excel-Fähigkeiten zu verbessern.",
        fr: "Hypothèse : Nous fabriquons des moteurs pour différents constructeurs automobiles.\n\nCe fichier Excel représente un outil structuré de planification de production utilisé en assemblage final. C'est un système complet qui relie différentes informations pour organiser efficacement la production.\n\nL'onglet « Aufträge » constitue la base de la planification avec les ordres de production, numéros de produits, créneaux horaires et temps de travail disponibles.\n\nLa table « Prozesszeit » fournit des informations techniques sur la durée de fabrication de chaque produit, essentielles au calcul de capacité.\n\nL'onglet « Bestellung_Produktionsdatum » classe les commandes chronologiquement avec des dates et heures de production concrètes.\n\nL'onglet « Planning » est l'élément central : un calendrier de production détaillé réunissant toutes les informations.\n\nLa table « APE und OEE » évalue la performance de production avec des indicateurs comme l'OEE (Overall Equipment Effectiveness).\n\nCe projet a également été réalisé pour améliorer mes compétences Excel.",
        en: "Assumption: We manufacture engines for various car manufacturers.\n\nThis Excel file represents a structured production planning tool used in final assembly. It is a comprehensive system that links different information to efficiently organize production.\n\nThe 'Aufträge' sheet forms the basis of planning with production orders, product numbers, time slots and available working hours.\n\nThe 'Prozesszeit' table provides technical information about manufacturing duration for each product, crucial for capacity calculation.\n\nThe 'Bestellung_Produktionsdatum' sheet orders assignments chronologically with concrete production dates and times.\n\nThe 'Planning' sheet is the central element: a detailed production calendar bringing all information together.\n\nThe 'APE und OEE' table evaluates production performance with KPIs like OEE (Overall Equipment Effectiveness).\n\nThis project was also carried out to improve my Excel skills.",
      },
      fileLabel: { de: "Produktionsplanungs-Datei (Excel)", fr: "Fichier de planification (Excel)", en: "Production Planning File (Excel)" },
    },
    certificates: {
      title: { de: "Professionelle Zertifizierungen", fr: "Certifications Professionnelles", en: "Professional Certifications" },
      subtitle: { de: "Kontinuierliches Lernen", fr: "Apprentissage continu", en: "Continuous Learning" },
      description: {
        de: "Eine Sammlung professioneller Zertifizierungen zur Erweiterung der Expertise in modernen Industrietechnologien.\n\nIIoT-Minikurs: Zertifizierung über die Grundlagen des Industrial Internet of Things (IIoT) und Industrie 4.0 mit einem Überblick über aktuelle Themen der Industriedigitalisierung.\n\nCAD-Zertifikat: Nachweis von Kompetenzen im Bereich Computer-Aided Design.",
        fr: "Une collection de certifications professionnelles pour élargir l'expertise dans les technologies industrielles modernes.\n\nMini-cours IIoT : Certification sur les bases de l'Internet Industriel des Objets (IIoT) et de l'Industrie 4.0, avec une vue d'ensemble des sujets actuels de la digitalisation industrielle.\n\nCertificat CAD : Attestation de compétences en conception assistée par ordinateur.",
        en: "A collection of professional certifications to broaden expertise in modern industry technologies.\n\nIIoT Minicourse: Certification on the basics of Industrial Internet of Things (IIoT) and Industry 4.0, providing an overview of current topics related to the digitalization of industry.\n\nCAD Certificate: Proof of competence in Computer-Aided Design.",
      },
    },
    reports: {
      title: { de: "Arbeitsberichte", fr: "Rapports de travail", en: "Work Reports" },
      subtitle: { de: "Berufserfahrung", fr: "Expérience Professionnelle", en: "Professional Experience" },
      description: {
        de: "Detaillierte Berichte über berufliche Praktika und Werkstudententätigkeiten.\n\nArbeitsbericht bei 3M: Im Jahr 2021 arbeitete ich als Werkstudent bei 3M in Wuppertal. Dieser Bericht beschreibt meine Aufgaben, Verantwortlichkeiten und die verschiedenen durchgeführten Aktivitäten innerhalb des Unternehmens.",
        fr: "Rapports détaillés documentant les expériences de stages professionnels et d'emploi étudiant.\n\nRapport de travail chez 3M : En 2021, j'ai travaillé comme étudiant salarié chez 3M à Wuppertal. Ce rapport couvre mes fonctions, responsabilités et les différentes activités réalisées au sein de l'entreprise.",
        en: "Detailed reports documenting professional internship and working student experiences.\n\nWork Report at 3M: In 2021, I worked as a working student at 3M in Wuppertal. This report covers my work duties and responsibilities, along with the different activities carried out within the company.",
      },
    },
  },
} as const;

// Helper to get a translation value
export function t(
  obj: Record<Locale, string> | undefined,
  locale: Locale
): string {
  if (!obj) return "";
  return obj[locale] || obj["de"] || "";
}
