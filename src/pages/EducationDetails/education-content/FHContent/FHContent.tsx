import SectionHeader from '../../../../components/SectionHeader/SectionHeader';
import styles from './FHContent.module.css';

import shipImg from './assets/ship.png';
import apisLogo from './assets/apis-logo.png';
import catamranImg from './assets/catamaran.png';
import myAirovPhoto from './assets/airov-photo.jpg';
import airovLogo from './assets/airov-logo.svg';

export default function FHContent() {
  return (    
    <div className={styles.container}>

      <SectionHeader 
        title="Master Thesis." 
      />

      <div className={styles.taskSection}>
        <div className={styles.taskInfo}>
          <h3 className={styles.taskLabel}>The Challenge</h3>
          <p className={styles.taskMain}>
            Develop an Automated Vessel-Docking System.
          </p>
          <p className={styles.taskSub}>
            The focus of the project is to enhance operational safety,
            reduce operator workload and provide a <strong className='accent-gradient'>foundation for large-scale deployment</strong> of autonomous
            surface platforms within ports and marinas
          </p>
        </div>
        <img src={shipImg} alt="Autonomous Vessel" className={styles.taskImg} />
      </div>

      <SectionHeader 
        title="Industry Collaboration." 
      />

      <div className={styles.borderlessSection}>
        <p className={styles.sectionDescription}>
          This thesis was conducted in close collaboration with <strong className='accent-gradient'>APIS Solutions</strong>. 
          Working directly with industry experts allowed for the system to be tested against 
          real-world constraints, ensuring the algorithms met commercial safety and reliability standards.
        </p>
        <img src={apisLogo} alt="APIS Solutions" className={styles.sectionImg} />
      </div>

      <SectionHeader 
        title="System Architecture."
        subtitle='Technologies, algorythms and hardware components.'
      />

      {/* 3. TECHNICAL IMPLEMENTATION (Две колонки: текст + железо/софт) */}
      <div className={styles.borderlessSection}>
          <p className={styles.sectionDescription}>
            The project is a miniature catamaran equipped with LiDAR and Proximity sensors.
            The <strong className='accent-gradient'>Jetson Nano</strong> serves as the onboard computer,
             running <strong className='accent-gradient'>ROS</strong> to process sensor data and execute control algorithms. 
          </p>
          <img src={catamranImg} alt="Catamaran" className={styles.sectionImg} style={{ backgroundColor: '#ffffff' }} />
      </div>

      <SectionHeader 
        title="Public Showcase."
        subtitle='Papers and conference presentations.'
      />

      {/* 4. PUBLIC SHOWCASE: Airov26 */}
      <div className={styles.standardSection}>
        <div className={styles.splitLayout}>
          
          <div className={styles.textColumn}>
            {/* Логотип конференции */}
            {/* <img src={airovLogo} alt="Airov26 Logo" className={styles.eventLogo} /> */}
            
            <p className={styles.sectionDescription}>
              The technical achievements of the Automated Vessel-Docking project 
              were selected for presentation at the <strong className="accent-gradient">Airov26 Conference</strong>. 
              I had the opportunity to present our findings to the robotics community, 
              highlighting the integration of autonomous navigation in marine environments.
            </p>

            {/* Группа ссылок и документов */}
            <div className={styles.resourceLinks}>
              <a href="URL_К_ПУБЛИКАЦИИ" target="_blank" rel="noopener noreferrer" className={styles.primaryLink}>
                Read Publication
                <svg className={styles.linkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
              </a>
              
              <div className={styles.docButtons}>
                <button className={styles.secondaryLink} onClick={() => window.open('https://drive.google.com/file/d/1h2p78vyfOwg9e1d7pPxyC90g_76o0u2Y/view?usp=sharing', '_blank')}>View Slides</button>
                <button className={styles.secondaryLink} onClick={() => window.open('https://drive.google.com/file/d/1MjxTWQPpQos4azbYQ-A6BwWkKL35Skib/view?usp=sharing', '_blank')}>View Poster</button>
              </div>
            </div>
          </div>

          <div className={styles.photoColumn}>
            <div className={styles.standardPhotoWrapper}>
              <img src={myAirovPhoto} alt="Presenting at Airov26" className={styles.eventPhoto} />
            </div>
          </div>

        </div>

        <div className={styles.embedContainer}>
          <h4 className={styles.embedTitle}>Presentation Slides</h4>
          <div className={styles.iframeWrapper}>
            <iframe 
              src="https://drive.google.com/file/d/1h2p78vyfOwg9e1d7pPxyC90g_76o0u2Y/preview"
              width="100%" 
              height="500px" 
              allow="autoplay"
            ></iframe>
            {/* <iframe  width="640" height="480"></iframe> */}
          </div>
        </div>
      </div>
    </div>
  );
}