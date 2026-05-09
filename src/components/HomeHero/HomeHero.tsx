import styles from './HomeHero.module.css';

function HomeHero() {
  return (
<section className={styles.hero}>
        <p className={styles.greeting}>Hi! My name is</p>
        <h1 className={styles.name}>Viktor Komyshan</h1>
        <h2 className={styles.profession}>Software developer
          <br />
          <span className={styles.gradientText}>Art in Code</span>
        </h2>
        <p className={styles.bio}>
          I design and develop various software with attention to every detail <br/>
        </p>
        
        <div className={styles.actionButtons}>
          <a href="mailto:victorkomyshan@gmail.com" className={styles.btnPrimary}>Contact</a>
          <a href="https://github.com/VictorKomshn" className={styles.btnSecondary}>GitHub</a>
        </div>
</section>
  )
}

export default HomeHero;