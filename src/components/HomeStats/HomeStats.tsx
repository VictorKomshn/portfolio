import styles from './HomeStats.module.css';

function HomeStats() {
    return (
        <section className={styles.statsSection}>
            <div className={styles.bentoGrid}>
              
              {/* Первая метрика: Широкая карточка */}
              <div className={`${styles.bentoCard} ${styles.cardLarge}`}>
                <span className={styles.statNumber}>7</span>
                <div className={styles.statText}>
                  <span className={styles.statUnit}>years</span><br />
                  programming experience
                </div>
              </div>
    
              {/* Вторая метрика: Квадратная карточка */}
              <div className={styles.bentoCard}>
                <span className={styles.statNumber}>4</span>
                <div className={styles.statText}>
                  <span className={styles.statUnit}>years</span><br />
                  professional<br />experience
                </div>
              </div>
    
              {/* Третья метрика: Квадратная карточка */}
              <div className={styles.bentoCard}>
                <span className={styles.statNumber}>MS</span>
                <div className={styles.statText}>
                  <span className={styles.statUnit}>degree</span><br />
                  in systems<br />design
                </div>
              </div>
    
            </div>
        </section>
    );
}

export default HomeStats;