import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Верхняя часть: Призыв к действию и ссылки */}
        <div className={styles.topSection}>
          <div className={styles.contactInfo}>
            <h2 className={styles.title}>Let's build something great.</h2>
            <p className={styles.subtitle}>Open for new opportunities and interesting projects.</p>
          </div>
          
          <div className={styles.socialLinks}>
            <a href="mailto:victor.komyshan@gmail.com" className={styles.link}>Email</a>
            <a href="https://www.linkedin.com/in/victor-komyshan/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
            <a href="https://github.com/VictorKomshn" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
          </div>
        </div>

        {/* Нижняя часть: Копирайт */}
        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            © {currentYear} Viktor Komyshan. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
}