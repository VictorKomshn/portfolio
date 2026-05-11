// src/data/educationData.ts

import fhLogo from '../assets/exp_logos/FH-Kaernten-Logo.png';
import itmoLogo from '../assets/exp_logos/itmo-logo.svg';

interface Thesis {
  title: string;
  link?: string; // Ссылка на скачивание PDF или страницу проекта (если есть)
}

export interface EducationDetails {
  id: number;
  eduId: string;       // Уникальный ID для URL (например, 'itmo-bsc')
  university: string;  // Название вуза
  degree: string;      // Степень (B.Sc. Computer Science)
  period: string;
  skillIds: string[];  // Ключевые навыки/технологии, изученные в вузе
  logo?: string;
  gpa?: string; // Средний балл (если хотите указать)
  thesis?: Thesis;
}

export const educationData: EducationDetails[] = [
  {
    id: 0,
    eduId: 'itmo-bsc',
    university: 'ITMO University',
    degree: 'B.Sc. Computer Science',
    period: '2019 — 2023',
    logo: itmoLogo,
    skillIds: ['cpp', 'algorithms', 'cryptography'],
    gpa: 'Honors',
    thesis: {
      title: 'Development of a secure messenger with distributed architecture',
      link: '#' // Сюда можно поставить ссылку
    }

  },
  {
    id: 1,
    eduId: 'fh-kaernten-msc',
    university: 'FH Kärnten',
    degree: 'M.Sc. Systems Design',
    period: '2024 — 2026',
    logo: fhLogo,
    skillIds: ['cpp', 'algorithms', 'cryptography', 'plc', 'python'],
    gpa: '2.0/5.0',
    thesis: {
      title: 'Framework for Integrated Path Planning and Robust Motion Control in Autonomous Vessel Mooring ',
      link: '#' // Сюда можно поставить ссылку
    }
  },
  // ... магистратура
];