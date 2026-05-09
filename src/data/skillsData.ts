export interface Skill {
  id: string;
  name: string;
  level: number;
  logo?: string;
  tags: string[];
}

import c_sharp_logo from '../assets/skills_logos/Logo_C_sharp.svg';
import cpp_logo from '../assets/skills_logos/ISO_C++_Logo.svg';
import c_logo from '../assets/skills_logos/C_Programming_Language.svg';
import plc_logo from '../assets/skills_logos/plcnext_logo.png';
import python_logo from '../assets/skills_logos/Python-logo-notext.svg';
import ros_logo from '../assets/skills_logos/Ros_logo.svg';
import ts_logo from '../assets/skills_logos/Typescript_logo_2020.svg';
import react_logo from '../assets/skills_logos/React-icon.svg';
import postgres_logo from '../assets/skills_logos/Postgresql_elephant.svg';
import sqlserver_logo from '../assets/skills_logos/Microsoft_SQL_Server_2025_icon.svg';
import mongo_logo from '../assets/skills_logos/mongodb-svgrepo-com.svg';
import git_logo from '../assets/skills_logos/git-icon-logo-svgrepo-com.svg';
import linux_logo from '../assets/skills_logos/linux_logo.svg';

export const skillsData: Skill[] = [
  { id: 'c_shasp', name: 'C#', level: 5, logo: c_sharp_logo , tags: ['backend', 'languages']},
  { id: 'cpp', name: 'C++', level: 4, logo:cpp_logo, tags: ['languages', 'embedded', 'robotics'] },
  { id: 'c', name: 'C', level: 4, logo:c_logo , tags: ['embedded', 'languages'] },
  { id: 'plc', name: 'PLC', level: 4, logo: plc_logo, tags: ['embedded', 'languages'] },
  { id: 'python', name: 'Python', level: 4, logo: python_logo, tags: ['languages', 'backend'] },
  { id: 'git', name: 'Git', level: 5, logo:git_logo, tags: ['frontend','backend'] },
  { id: 'ros2', name: 'ROS2', level: 3, logo:ros_logo, tags: ['framework', 'robotics'] },
  { id: 'ts', name: 'TypeScript', level: 3, logo:ts_logo, tags: ['frontend', 'languages'] },
  { id: 'react', name: 'React', level: 3, logo:react_logo, tags: ['frontend', 'framework'] },
  { id: 'postgres', name: 'PostgreSQL', level: 5, logo:postgres_logo, tags: ['databases', 'backend'] },
  { id: 'sqlserver', name: 'SQLServer', level: 4, logo:sqlserver_logo, tags: ['databases', 'backend'] },
  { id: 'mongo', name: 'MongoDB', level: 3, logo:mongo_logo, tags: ['databases', 'backend'] },
  { id: 'project_management', name: 'Project Management', level: 4, tags: ['soft-skills'] },
  { id: 'linux', name: 'Linux', level: 4, logo:linux_logo, tags: ['operating-systems'] },
];