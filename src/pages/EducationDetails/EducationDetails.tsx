// src/pages/EducationDetails.tsx
import { useParams } from 'react-router-dom';
import styles from './EducationDetails.module.css';
import { educationData } from '../../data/educationData';
import { skillsData } from '../../data/skillsData';

import FHContent from './education-content/FHContent/FHContent';
import ItmoContent from './education-content/ITMOContent/ITMOContent';

const contentMap: Record<string, React.ReactNode> = {
  'fh-kaernten-msc': <FHContent />,
  'itmo-bsc': <ItmoContent />,
};

export default function EducationDetails() {
  const { eduId } = useParams(); 
  
  const edu = educationData.find(e => e.eduId === eduId);

  if (!edu || !eduId) {
    return <div className={styles.notFound}>Education not found</div>;
  }

  // Гидратация скиллов/дисциплин (как в JobDetails)
  const eduSkills = edu.skillIds
    .map(id => skillsData.find(skill => skill.id === id))
    .filter((skill) => skill !== undefined);

  return (
    <div className={styles.pageWrapper}>
      {/* СЕКЦИЯ 1: HERO ДЛЯ ОБРАЗОВАНИЯ */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          
          <div className={styles.headerRow}>
            {edu.logo && <img src={edu.logo} alt={edu.university} className={styles.logo} />}
            <span className={styles.period}>{edu.period}</span>
          </div>

          <div className={styles.heroInformation}>
              <div className={styles.heroDescription}>
                <h1 className={styles.degree}>{edu.degree}</h1>
                <h2 className={styles.university}>{edu.university}</h2>
              </div>
              
              {/* Блок скиллов / Ключевых технологий */}
              {eduSkills.length > 0 && (
                <div className={styles.skillsWrapper}>
                  <div className={styles.skillsList}>
                    {eduSkills.map(skill => (
                      <div key={skill.id} className={styles.skillCard}>
                        <div className={styles.skillInfo}>
                          {skill.logo ? (
                            <img src={skill.logo} alt={`${skill.name} logo`} className={styles.skillLogo} />
                          ) : (
                            <div className={styles.logoPlaceholder}></div>
                          )}
                          <span className={styles.skillName}>{skill.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </div>

        </div>
      </section>

      {/* СЕКЦИЯ 2: КАСТОМНЫЙ КОНТЕНТ (Тема диплома, курсы, награды) */}
      {contentMap[eduId] || (
        <div className={styles.comingSoon}>
          <p>Detailed academic info is currently in development.</p>
        </div>
      )}
      
    </div>
  );
}