import SectionHeader from '../../../../components/SectionHeader/SectionHeader';
import styles from './FHContent.module.css';

import shipImg from './assets/ship.png';
import apisLogo from './assets/apis-logo.png';
import catamranImg from './assets/catamaran-new.jpg';
import myAirovPhoto from './assets/airov-photo.jpg';
import pcaImage from './assets/pca.png';
import tebImage from './assets/teb.png';
import controllerStateMachine from './assets/controller-state-machine.png';
import lidarClustering from './assets/lidar-clustering.png';
import GlobalAlgorithmDiagram from './GlobalAlgorithmDiagram.tsx';


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
        title="Overview."
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


      {/* 4. SYSTEM Software ARCHITECTURE (5 Stages) */}
      <SectionHeader 
        title="Software Architecture."
        subtitle='Integrated Planning and Control (IPC) Framework.'
      />
      
      <div className={styles.architectureContainer}>
        {/* Stage 1 */}
        <div className={styles.splitLayout}>
          <div className={styles.textColumn}>
            <span className={styles.stageBadge}>Stage 1</span>
            <h3 className={styles.stageTitle}>Semantic Perception & Refinement</h3>
            <p className={styles.sectionDescription}>
              To prevent the system from crashing into walls if the operator clicks inaccurately, I developed <strong>DockAnalyzer</strong>. Using Raycasting on the Occupancy Grid and <strong>PCA (Principal Component Analysis)</strong>, it extracts the exact longitudinal axis of the dock and automatically identifies the gates.
            </p>
          </div>
          <div className={styles.photoColumn}>
            <div className={styles.standardPhotoWrapper}>
              <img src={pcaImage} alt="PCA Diagram" className={styles.photo} />
            </div>
          </div>
        </div>

        {/* Stage 2 (Reverse) */}
        <div className={`${styles.splitLayout} ${styles.reverseLayout}`}>
          <div className={styles.textColumn}>
            <span className={styles.stageBadge}>Stage 2</span>
            <h3 className={styles.stageTitle}>Kinematic Global Planning</h3>
            <p className={styles.sectionDescription}>
              Grid algorithms like A* create jagged paths. I integrated <strong>Hybrid A*</strong> with custom <strong>Path Stitching</strong>. It builds a physically feasible curve strictly to the dock gates, then stitches a perfect straight glide slope into the dock.
            </p>
          </div>
          <div className={styles.photoColumn}>
            <div className={styles.standardPhotoWrapper} style={{ backgroundColor: '#ffffff' }}>
              <GlobalAlgorithmDiagram />
            </div>
          </div>
        </div>

        {/* Stage 3 */}
        <div className={styles.splitLayout}>
          <div className={styles.textColumn}>
            <span className={styles.stageBadge}>Stage 3</span>
            <h3 className={styles.stageTitle}>Dynamic LiDAR Perception</h3>
            <p className={styles.sectionDescription}>
              To filter out moving object "ghosts" on the costmap, I built a C++/PCL pipeline. It uses Clustering, an <strong>Extended Kalman Filter (EKF)</strong>, and the <strong>Hungarian Algorithm</strong> to track targets and mathematically extrapolate dynamic threats.
            </p>
          </div>
          <div className={styles.photoColumn}>
            <div className={styles.standardPhotoWrapper} style={{ backgroundColor: '#2e2e2e' }}>
              <img src={lidarClustering} alt="LiDAR Clustering" className={styles.photo} style={{ mixBlendMode: 'normal' }} />
            </div>
          </div>
        </div>

        {/* Stage 4 (Reverse) */}
        <div className={`${styles.splitLayout} ${styles.reverseLayout}`}>
          <div className={styles.textColumn}>
            <span className={styles.stageBadge}>Stage 4</span>
            <h3 className={styles.stageTitle}>Local Planning </h3>
            <p className={styles.sectionDescription}>
              Instead of unstable APF forces, obstacle evasion is formulated as non-linear optimization using the <strong>Timed Elastic Band (TEB)</strong> approach. Exponential penalties push the local path away from threats smoothly, preventing oscillation on water.
            </p>
          </div>
          <div className={styles.photoColumn}>
            <div className={styles.standardPhotoWrapper}>
              <img src={tebImage} alt="TEB Optimization" className={styles.photo} />
            </div>
          </div>
        </div>

        {/* Stage 5 */}
        <div className={styles.splitLayout}>
          <div className={styles.textColumn}>
            <span className={styles.stageBadge}>Stage 5</span>
            <h3 className={styles.stageTitle}>Robust Motion Control</h3>
            <p className={styles.sectionDescription}>
              Designed a 3-Phase State Machine (Transit, Approach, Mooring). It features an <strong>Anti-Jerk profile</strong> with a "Soft Gate" throttle, and <strong>Cross-Track Error compensation</strong> to dynamically counteract wind sway inside the tight dock.
            </p>
          </div>
          <div className={styles.photoColumn}>
            <div className={styles.standardPhotoWrapper}>
              <img src={controllerStateMachine} alt="Controller State Machine" className={styles.photo} style={{ padding: '0px' }} />
            </div>
          </div>
        </div>
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
              <a href="https://proceedings.airov.at/article/id/810/" target="_blank" rel="noopener noreferrer" className={styles.primaryLink}>
                Read Publication
                <svg className={styles.linkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
              </a>
              
              <div className={styles.docButtons}>
                <button className={styles.secondaryLink} onClick={() => window.open('https://drive.google.com/file/d/1h2p78vyfOwg9e1d7pPxyC90g_76o0u2Y/view?usp=sharing', '_blank')}>View Slides</button>
                <button className={styles.secondaryLink} onClick={() => window.open('https://drive.google.com/file/d/155Aq7XkjnFVA6MBCKZKEhJ6mECEwcsqM/view?usp=sharing', '_blank')}>View Poster</button>
              </div>
            </div>
          </div>

          <div className={styles.photoColumn}>
            <div className={styles.standardPhotoWrapper}>
              <img src={myAirovPhoto} alt="Presenting at Airov26" className={styles.eventPhoto} />
            </div>
          </div>

        </div>

        {/* <div className={styles.embedContainer}>
          <h4 className={styles.embedTitle}>Presentation Slides</h4>
          <div className={styles.iframeWrapper}>
            <iframe 
              src="https://drive.google.com/file/d/1h2p78vyfOwg9e1d7pPxyC90g_76o0u2Y/preview"
              width="100%" 
              height="500px" 
              allow="autoplay"
            ></iframe>
          </div>
        </div> */}
      </div>
    </div>
  );
}