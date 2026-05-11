import styles from './CollectionChelContent.module.css';


import aspnetIcon from './assets/aspnet.png';
import entityFrameworkIcon from './assets/entityframeworkcore-original.svg';

import cleanArchitectureIcon from './assets/clean_architecture.png';

export default function CollectionChelContent() {
  return (
    <div className={styles.container}>
        <div className={styles.taskSection}>
            <h3 className={styles.taskLabel}>The Challenge</h3>
            <p className={styles.taskMain}>
                Develop an E-commerce website for luxury fashion retailer.
            </p>
            <p className={styles.taskSub}>
                The website was designed, developed and deployed.
                Additionaly it was necessary to integrate payment and delivery APIs to enhance functionality.
            </p>
        </div>

        <section className={styles.featureBlock}>
        
        {/* ЛЕВАЯ ЧАСТЬ: Текст и иконки */}
        <div className={styles.textContent}>
          <h3 className={styles.title}>Backend Development</h3>
          <p className={styles.description}>
            The general structure of the backend was designed based on a <strong>Layered Monolith</strong> and <strong>Clean Architecture</strong> , which allowed for better separation of concerns and easier maintenance.
            I implemented <strong>RESTful APIs</strong> to handle various functionalities such as product management, user authentication, and order processing.
            Additionally, I integrated <strong>Entity Framework</strong> for efficient database management and ensured seamless communication between the frontend and backend components.
          </p>
          
          {/* Блок с программами */}
          <div className={styles.techStack}>
            <div className={styles.techBadge}>
              <img src={aspnetIcon} alt="CubeIDE" className={styles.techIcon} />
              <span>ASP.NET</span>
            </div>
            <div className={styles.techBadge}>
              <img src={entityFrameworkIcon} alt="Entity Framework" className={styles.techIcon} />
              <span>Entity <br/> Framework</span>
            </div>
            {/* <div className={styles.techBadge}>
              <img src={freeRtosIcon} alt="FreeRTOS" className={styles.techIcon} />
              <span>FreeRTOS</span>
            </div> */}
          </div>
        </div>

        {/* ПРАВАЯ ЧАСТЬ: Изображение контроллера */}
        <div className={styles.visualContent}>
          <div className={styles.imageWrapper}>
            <img src={cleanArchitectureIcon} alt="Microcontroller board" className={styles.descriptionImg} />
          </div>
        </div>

      </section>
    </div>
  );
}