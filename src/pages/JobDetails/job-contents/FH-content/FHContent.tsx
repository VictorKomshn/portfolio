// import styles_global from '../../JobDetails.module.css'; // Можно сделать общие стили для контента
import styles from './FHContent.module.css'; // Или отдельные стили для этого контента
// import styles_global from '../../../../App.css'; // Можно сделать общие стили для контента

import controllerImg from './assets/controller.jpg';
import cubeIdeIcon from './assets/stm32-cube-ide-logo.png';
import freeRtosIcon from './assets/FreeRTOS-Logo.png';
import SectionHeader from '../../../../components/SectionHeader/SectionHeader';


import eventPhoto from './assets/LNF.png';
import lnfLogo from './assets/LangeNachtDerForschung.jpg';


export default function FHContent() {
  return (
    <div className={styles.container}>
      
      {/* <SectionHeader 
        title="Embedded Systems & Real-Time Control." 
      /> */}

      <div className={styles.taskSection}>
        <h3 className={styles.taskLabel}>The Challenge</h3>
        <p className={styles.taskMain}>
          Develop an Energy Management System for a miniature of a real building.
        </p>
        <p className={styles.taskSub}>
          The system was responsible for monitoring and controlling various <br/> energy-producing devices, 
          including <strong className={'accent-gradient'}>Photovoltaic panels</strong>, <strong className='accent-gradient'>Li-Ion batteries</strong>, and a <strong className='accent-gradient'>Hydrogen fuel cell</strong>.
        </p>
      </div>

      <section className={styles.featureBlock}>
        
        {/* ЛЕВАЯ ЧАСТЬ: Текст и иконки */}
        <div className={styles.textContent}>
          <h3 className={styles.title}>Embedded Systems & Real-Time Control</h3>
          <p className={styles.description}>
            My primary focus was on developing an Energy Management System for a miniature of a real building.
            The system was responsible for monitoring and controlling various energy-produsing devices, including Photovolatic panels, Li-On battery and Hydrogen fuel cell.
            The following controller was used for the project: STM32L475VGT6, which is a low power microcontroller from STMicroelectronics.
          </p>
          
          {/* Блок с программами */}
          <div className={styles.techStack}>
            <div className={styles.techBadge}>
              <img src={cubeIdeIcon} alt="CubeIDE" className={styles.techIcon} />
              <span>STM32CubeIDE</span>
            </div>
            
            <div className={styles.techBadge}>
              <img src={freeRtosIcon} alt="FreeRTOS" className={styles.techIcon} />
              <span>FreeRTOS</span>
            </div>
          </div>
        </div>

        {/* ПРАВАЯ ЧАСТЬ: Изображение контроллера */}
        <div className={styles.visualContent}>
          <div className={styles.imageWrapper}>
            <img src={controllerImg} alt="Microcontroller board" className={styles.controllerImg} />
          </div>
        </div>

      </section>

      <SectionHeader title="Public Showcase" />

      {/* СЕКЦИЯ: ВЫСТАВКА (Lange Nacht der Forschung) */}
      <div className={styles.standardSection}>
        <div className={styles.splitLayout}>
          
          {/* ЛЕВАЯ ЧАСТЬ: Логотип и описание */}
          <div className={styles.textColumn}>
            {/* Логотип выставки */}
            <img src={lnfLogo} alt="Lange Nacht der Forschung" className={styles.eventLogo} />
            <p className={styles.sectionDescription}>
              The developed Energy Management System was presented at the <strong className='accent-gradient'>Lange Nacht der Forschung</strong> (Long Night of Research) as the part of <strong style={{ color: '#d51317' }}>FH Kärnten</strong> display. It was demonstrated to a wide audience, showcasing the practical application of modern embedded systems and renewable energy concepts.
            </p>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: Фотография с мероприятия */}
          <div className={styles.photoColumn}>
            <div className={styles.standardPhotoWrapper}>
              <img src={eventPhoto} alt="Exhibition stand" className={styles.eventPhoto} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}