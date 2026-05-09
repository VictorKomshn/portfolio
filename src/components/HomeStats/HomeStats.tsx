import styles from './HomeStats.module.css';

function HomeStats() {
    return (
        <section className={styles.statsSection}>
                <div className={styles.statsGrid}>
                  
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>7</span>
                    <div className={styles.statText}>
                      <span className={styles.statUnit}>years</span><br />
                      programming<br />experience
                    </div>
                  </div>
        
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>3</span>
                    <div className={styles.statText}>
                      <span className={styles.statUnit}>years</span><br />
                      professional<br />experience
                    </div>
                  </div>
        
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>MS</span>
                    <div className={styles.statText}>
                      <span className={styles.statUnit}>degree</span><br />
                      in systems<br />design
                    </div>
                  </div>
        
                </div>
              </section>
    )
}

export default HomeStats;