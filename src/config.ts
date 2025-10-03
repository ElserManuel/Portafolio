export const siteConfig = {
  name: "Elser Manuel",
  title: "Desarrollador Full Stack",
  description: "Portfolio website of Elser Manuel Lazaro Rosas",
  accentColor: "#1d4ed8",
  social: {
    email: "elser.lazaro@vallegrande.edu.pe",
    linkedin: "https://www.linkedin.com/in/manuel-l%C3%A1zaro-rosas-56187a221",
    github: "https://github.com/ElserManuel",
    phone: "+51 943 262 472",
    location: "Lima San vicente de Cañete"
  },
  aboutMe:
    "Desarrollador Full Stack con 3+ años de experiencia especializándose en soluciones escalables con metodologías Agile y Scrum. Dominio de Java + Spring Boot, Angular, React y arquitectura de microservicios. Expertise en integración de REST APIs, CI/CD pipelines, containerización con Docker/Kubernetes y despliegue en cloud (GCP, AWS). Experiencia en desarrollo móvil multiplataforma y tecnologías blockchain. Comprometido con las mejores prácticas de desarrollo y entrega continua.",
  skills: [
    "Java",
    "Spring Boot",
    "Go",
    "Angular",
    "React",
    "React Native",
    "Flutter",
    "Node.js",
    "Express.js",
    "PHP",
    "TypeScript",
    "Microservicios",
    "REST APIs",
    "Apache Kafka",
    "Docker",
    "Kubernetes",
    "GCP",
    "AWS",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Cassandra DB",
    "Blockchain",
    "Web3.js",
    "Ethereum",
    "CI/CD",
    "Firebase",
    "GitLab CI",
    "Spring Security",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Material Design"
  ],
  projects: [
    {
      name: "Servicio de Ingesta de Datos en Tiempo Real (Binance)",
      description:
        "Desarrollo de un servicio en Go para la extracción de datos en tiempo real desde la API de Binance mediante WebSocket. Implementación de Cassandra DB para almacenamiento distribuido y escalable de datos financieros con proceso de depuración para consolidar datos relevantes cada minuto, optimizando espacio y consultas posteriores.",
      link: "https://github.com/ElserManuel",
      skills: ["Go", "WebSocket", "Cassandra DB", "Docker", "API Integration", "Real-time Data"],
    },
    {
      name: "Proyecto NPH - Arquitectura de Microservicios",
      description:
        "Desarrollo de microservicios con Spring Boot aplicando arquitectura distribuida y comunicación asíncrona con Apache Kafka. Implementación de módulos de datos (personales, vivienda y registros adicionales) con Firebase Authentication para gestión de roles y permisos. Despliegue en la nube mediante Render con dockerización de servicios.",
      link: "https://github.com/ElserManuel",
      skills: ["Spring Boot", "Apache Kafka", "Angular", "Firebase", "Docker", "Render", "Microservicios"],
    },
    {
      name: "Ciskou Wallet - Blockchain Ethereum",
      description:
        "Desarrollo de una wallet funcional y segura con soporte para múltiples cuentas de usuario. Implementación de conexión a la red Ethereum mediante Web3.js, integración de MetaMask para autenticación y firma de transacciones. Gestión de interacción con contratos inteligentes para lectura y envío de ETH con visualización en tiempo real del historial de transacciones.",
      link: "https://github.com/ElserManuel",
      skills: ["Angular", "TypeScript", "Web3.js", "Ethereum", "MetaMask", "Blockchain", "Smart Contracts"],
    },
    {
      name: "Edulick - Sistema de Gestión de Cursos",
      description:
        "Aplicación web en PHP puro siguiendo el patrón arquitectónico MVC para asegurar un código modular y mantenible. Sistema de autenticación completo (registro, login, logout) con cifrado de contraseñas mediante bcrypt. CRUD de cursos con paginación dinámica mediante AJAX, panel de administración personalizado y gestión de perfiles de usuario.",
      link: "https://github.com/ElserManuel",
      skills: ["PHP", "MVC", "MySQL", "AJAX", "bcrypt", "HTML5", "CSS3", "JavaScript"],
    },
  ],
  experience: [
    {
      company: "Servicio de Ingesta de Datos (Binance)",
      title: "Desarrollador Backend",
      dateRange: "Julio 2025 (3 semanas)",
      bullets: [
        "Implementación de sistema de ingesta en tiempo real con Go + WebSocket logrando baja latencia en captura de datos de mercado de Binance",
        "Optimización del almacenamiento mediante filtrado inteligente de datos con Cassandra DB, reduciendo el tamaño de la base sin perder información clave",
        "Creación de proceso de depuración para consolidar y persistir únicamente datos relevantes cada minuto",
        "Dockerización del servicio para facilitar despliegue, portabilidad y ejecución en entornos de prueba y producción",
      ],
    },
    {
      company: "Proyecto NPH",
      title: "Full Stack Developer",
      dateRange: "Agosto 2024 - Junio 2025",
      bullets: [
        "Diseño e implementación de arquitectura de microservicios modular con Spring Boot, permitiendo separación clara de responsabilidades entre diferentes dominios de datos",
        "Desarrollo de interfaz completa en Angular con experiencia de usuario intuitiva y modularidad para cada servicio",
        "Integración de Apache Kafka para mejorar la comunicación entre microservicios, asegurando alta disponibilidad y tolerancia a fallos",
        "Implementación de Firebase Authentication para gestión de roles, permisos y autenticación segura de usuarios",
        "Implementación exitosa de despliegues contenerizados con Docker y publicación en Render, mejorando la eficiencia en la entrega del software",
      ],
    },
    {
      company: "Ciskou Wallet",
      title: "Desarrollador Full Stack",
      dateRange: "Mayo 2025 - Julio 2025",
      bullets: [
        "Implementación de conexión a la red Ethereum mediante Web3.js e integración de MetaMask para autenticación y firma de transacciones",
        "Gestión de interacción con contratos inteligentes para lectura y envío de ETH en la red de prueba de Ethereum",
        "Desarrollo del frontend en Angular con TypeScript para una interfaz dinámica y responsiva",
        "Creación de wallet funcional y segura con soporte para múltiples cuentas y visualización en tiempo real del historial de transacciones",
        "Adquisición de experiencia práctica en desarrollo blockchain e integración de frontend con Web3",
      ],
    },
    {
      company: "Edulick - Sistema de Gestión de Cursos",
      title: "Practicante Profesional - Desarrollador Full Stack",
      dateRange: "Marzo 2024 - Abril 2024 (1 mes)",
      bullets: [
        "Desarrollo de aplicación web en PHP puro siguiendo el patrón arquitectónico MVC para asegurar código modular y mantenible",
        "Implementación de sistema de autenticación completo (registro, login, logout) con cifrado de contraseñas mediante bcrypt",
        "Construcción de CRUD de cursos con paginación dinámica mediante AJAX para mejorar la experiencia del usuario",
        "Maquetación e interfaz responsiva con HTML5, CSS3 y JavaScript, optimizada para escritorio y dispositivos móviles",
        "Desarrollo exitoso de sistema de gestión académico completo en plazo de 1 mes, cumpliendo con todos los requisitos solicitados",
      ],
    },
  ],
  education: [
    {
      school: "IES VALLE GRANDE",
      degree: "Analista de Sistemas",
      dateRange: "2021 - 2025",
      achievements: [
        "Certificación en DevOps - Google Cloud",
        "BigQuery for Data Analysts - Google Cloud",
        "Flutter Development - Google Cloud",
        "Flutter Essentials - Google Cloud",
        "Introduction to Docker - Google Cloud",
        "Containerization and Virtualization Concepts - Google Cloud",
        "Data Fundamentals - IBM SkillsBuild",
        "SQL Server - Funciones y Procedimientos Almacenados - DataCamp",
        "Introduction to SQL Server - DataCamp",
        "Certificación - Desarrollo con Blockchain - LinkedIn Learning",
      ],
    },
  ],
  certifications: [
    {
      name: "DevOps",
      issuer: "Google Cloud",
      year: "2024"
    },
    {
      name: "BigQuery for Data Analysts",
      issuer: "Google Cloud",
      year: "2024"
    },
    {
      name: "Flutter Development",
      issuer: "Google Cloud",
      year: "2024"
    },
    {
      name: "Introduction to Docker",
      issuer: "Google Cloud",
      year: "2024"
    },
    {
      name: "Containerization and Virtualization Concepts",
      issuer: "Google Cloud",
      year: "2024"
    },
    {
      name: "Desarrollo con Blockchain",
      issuer: "LinkedIn Learning",
      year: "2024"
    },
    {
      name: "SQL Server - Funciones y Procedimientos",
      issuer: "DataCamp",
      year: "2024"
    },
    {
      name: "Data Fundamentals",
      issuer: "IBM SkillsBuild",
      year: "2024"
    }
  ],
  technicalSkills: {
    frontend: {
      title: "FRONTEND",
      skills: [
        "Angular (3 años): Desarrollo de aplicaciones web dinámicas y SPA con integración de APIs RESTful",
        "React (conocimiento esencial): Construcción de interfaces interactivas y reutilización de componentes",
        "React Native y Flutter (2 años): Desarrollo de aplicaciones móviles multiplataforma con Dart",
        "HTML5, CSS3, JavaScript, TypeScript: Maquetación responsiva y diseño de interfaces interactivas",
        "Bootstrap, Material Design, CSS Grid/Flexbox: Estilización y diseño de interfaces consistentes"
      ]
    },
    backend: {
      title: "BACKEND",
      skills: [
        "Java (3+ años): Desarrollo de microservicios backend con Spring Boot bajo arquitectura MVC y API RESTful",
        "Akka (conocimiento básico): Implementación de sistemas concurrentes y distribuidos",
        "Node.js / Express.js (2 años): Creación de servicios y APIs escalables",
        "PHP (1 año): Implementación de servicios y aplicaciones web dinámicas",
        "Go (conocimiento básico): Desarrollo de servicios backend ligeros y concurrentes"
      ]
    },
    databases: {
      title: "BASES DE DATOS",
      skills: [
        "SQL (MySQL, PostgreSQL, SQL Server, Oracle): Diseño, modelado y consultas optimizadas",
        "NoSQL (MongoDB, Supabase): Implementación de esquemas flexibles y gestión de datos no relacionales",
        "Cassandra DB: Almacenamiento distribuido y escalable de datos"
      ]
    },
    devops: {
      title: "DEVOPS & CLOUD",
      skills: [
        "Docker y Kubernetes (2 años): Contenerización y orquestación de microservicios",
        "Google Cloud Platform (GCP) y Render: Despliegue, monitoreo y gestión de aplicaciones en la nube",
        "GitLab CI, Git: Configuración de pipelines CI/CD, integración continua y control de versiones",
        "Amazon Web Services (AWS): Conocimiento de servicios principales (EC2, S3, IAM, Lambda, RDS)",
        "Actualmente cursando certificación AWS"
      ]
    },
    security: {
      title: "SEGURIDAD & AUTENTICACIÓN",
      skills: [
        "Spring Security: Implementación de autenticación, autorización basada en roles y protección de endpoints RESTful",
        "Firebase Authentication: Gestión de usuarios, autenticación social y SSO en aplicaciones web y móviles"
      ]
    },
    messaging: {
      title: "MENSAJERÍA & PROCESAMIENTO",
      skills: [
        "Apache Kafka: Implementación de colas de mensajería y procesamiento de eventos distribuidos"
      ]
    },
    methodologies: {
      title: "METODOLOGÍAS & HERRAMIENTAS",
      skills: [
        "Agile, Scrum, Git Workflow, CI/CD Pipelines",
        "Unit Testing, Integration Testing, Performance Optimization",
        "API Integration, Code Review, Microservices Architecture"
      ]
    }
  }
};