export interface JobDetails {
  id: number;          // Для сортировки и GSAP (0, 1, 2...)
  jobId: string;       // Уникальный slug для URL (напр. 'skai-junior')
  company: string;
  role: string;
  period: string;
  shortDesc: string;   // Краткое описание для таймлайна (Experience.tsx)
  logo?: string;       // Логотип (опционально)
  
  // --- Данные специально для страницы JobDetails ---
  skillIds: string[];
  fullDesc: string;    // Развернутое описание роли
  achievements?: string[]; // Список конкретных задач/достижений
}

import fhLogo from '../assets/exp_logos/FH-Kaernten-Logo.png';
import skaiLogo from '../assets/exp_logos/skai-logo.png';
import itmoLogo from '../assets/exp_logos/itmo-logo.svg';
import collectionChelLogo from '../assets/exp_logos/collectionchel-logo.jpg';


export const jobsData: JobDetails[] = [
    { 
    id: 0,
    jobId: 'fh-kaernten',
    company: "FH Kärnten", 
    role: "Scientific Project Assistant (WIPA)", 
    period: "2025 — Present", 
    shortDesc: "Developed an Energy Management System on a STM32L4 microcontroller, using SPI (e-ink display), I2C, Free RTOS and more. Participated with this project in a Lange Nacht der Forschung 26.",
    logo: fhLogo,
    fullDesc: "Full description for FH Kärnten position...",
    skillIds: ["cpp", "c", "project_management"],
    achievements: [
      "Created comprehensive training materials for new hires",
      "Assisted in project planning and coordination"
    ]
  },
  { 
    id: 1, 
    jobId: 'ddc-technologies',
    company: "DDC Technologies", 
    role: "Mobile app developer", 
    period: "01.2024 — 03.2024", 
    shortDesc: "Engineered a WPF-based control interface for high-performance lasers, implementing low-latency Bluetooth communication",
    // Логотипа нет
    fullDesc: "Full description for DDC Technologies position...",
    skillIds: ["c-sharp", "wpf", "bluetooth", "mobile-development"],
    achievements: [
      "Developed key features for a WPF mobile application",
      "Implemented Bluetooth communication with delay generator"
    ]
  },
  { 
    id: 2, 
    jobId: 'collectionchel',
    company: "Collectionchel", 
    role: "Website development", 
    period: "08.2023 — 01.2024", 
    shortDesc: "Architected a full-stack e-commerce solution with React and ASP.NET, integrating Banking API and Automated Delivery tracking",
    fullDesc: "Full description for Collectionchel position...",
    logo: collectionChelLogo,
    skillIds: ["c_shasp", "react", "git", "linux", "postgres" ],
    achievements: [
      "Developed both frontend and backend components of the website",
      "Integrated payment and delivery APIs to enhance functionality",
      "Collaborated closely with a designer to ensure a cohesive user experience"
    ]
  },
  { 
    id: 3, 
    jobId: 'skai',
    company: "SKAI", 
    role: "Junior С# Developer", 
    period: "06.2023 — 11.2023", 
    shortDesc: "Solved various tasks as developing new REST API services, fixing bugs and refactoring legacy code. Developed a system for building reports, based on a microservices  architecture, using Protobuf for internal communication",
    logo: skaiLogo,
    fullDesc: "Full description for SKAI position...",
    skillIds: ["c-sharp", "software-development", "debugging", "code-refactoring"],
    achievements: [
      "Developed new features for existing applications",
      "Fixed critical bugs and improved application performance",
      "Refactored legacy code to improve maintainability"
    ]
  },
  { 
    id: 4, 
    jobId: 'itmo',
    company: "ITMO", 
    role: "Junior researcher", 
    period: "12.2022 — 06.2023", 
    shortDesc: "Participated in development of a secure messenger\n\n Led a group, optimized our work with spreading tasks and checking their progress\n\n Participated in two university competitions, won one",
    logo: itmoLogo,
    fullDesc: "Full description for ITMO position...",
    skillIds: ["research", "team-leadership", "project-management", "cybersecurity"],
    achievements: [
      "Contributed to the development of a secure messaging application",
      "Led a team of researchers, optimizing task distribution and progress tracking",
      "Participated in two university competitions, winning one"
    ]
  },
  { 
    id: 5, 
    jobId: 'skai',
    company: "SKAI", 
    role: "Intern Developer", 
    period: "06.2021 — 06.2023", 
    shortDesc: "Learned how to work in a team with other developers, go to now programming basics and deepen my knowledge of C# Mostly did ASP.Net RESTful API’s",
    logo: skaiLogo,
    fullDesc: "Full description for SKAI intern position...",
    skillIds: ["c-sharp", "software-development", "debugging", "code-refactoring"],
    achievements: [
      "Gained experience in working within a development team",
      "Strengthened understanding of programming fundamentals",
      "Developed skills in creating RESTful APIs using ASP.NET"
    ]

  },
];