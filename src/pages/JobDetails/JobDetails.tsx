// src/pages/JobDetails.tsx
import { useParams } from 'react-router-dom';
import styles from './JobDetails.module.css';
import { jobsData } from '../../data/jobsData';

import FHContent from './job-contents/FH-content/FHContent';
// import SkaiContent from './job-contents/Skai-content/SkaiContent';
import ItmoContent from './job-contents/ITMO-content/ITMOContent';
import CollectionChelContent from './job-contents/CollectionChel-content/CollectionChelContent.tsx';

const contentMap: Record<string, React.ReactNode> = {
  'fh-kaernten': <FHContent />,
  'itmo': <ItmoContent />,
  'collectionchel': <CollectionChelContent />,
  
};

import { skillsData } from '../../data/skillsData.ts';


export default function JobDetails() {
  const { jobId } = useParams(); // Достаем id из URL (например, 'skai')
  
  // В реальном проекте здесь будет поиск по массиву, пока используем объект-словарь
  const job = jobsData.find(j => j.jobId === jobId);

  if (!job || !jobId) {
    return <div className={styles.notFound}>Job not found</div>;
  }

  const jobSkills = job.skillIds
    .map(id => skillsData.find(skill => skill.id === id))
    // .filter(Boolean) убирает undefined на случай, если вы опечатались в ID внутри jobsData
    .filter((skill) => skill !== undefined);

  return (
    <div className={styles.pageWrapper}>
      {/* СЕКЦИЯ 1: HERO ДЛЯ РАБОТЫ */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          
          <div className={styles.headerRow}>
            {job.logo && <img src={job.logo} alt={job.company} className={styles.logo} />}
            <span className={styles.period}>{job.period}</span>
          </div>

          <div className={styles.heroInformation}>
              <div className={styles.heroDescription}>
                <h1 className={styles.role}>{job.role}</h1>
                <h2 className={styles.company}>{job.company}</h2>
              </div>
                {/* Блок скиллов */}
              <div className={styles.skillsWrapper}>
                <div className={styles.skillsList}>
                  {jobSkills.map(skill => (
                    // Теперь у нас есть доступ ко всем полям скилла (name, icon, color)
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
          </div>
          

        </div>
      </section>

      
      {contentMap[jobId] || (
        <div className={styles.comingSoon}>
          <p>Detailed case study is currently in development.</p>
        </div>
      )}
      
    </div>
  );
}