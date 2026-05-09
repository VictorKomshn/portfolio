import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import styles from './Education.module.css';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

import { educationData } from '../../data/educationData';

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(`.${styles.card}`);
    
    gsap.fromTo(cards, 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section className={styles.section} ref={containerRef}>

      <div className={styles.container}>
        {educationData.map((item) => (
          <div key={item.id} className={styles.card}>
            
            {/* ВЕРХНЯЯ ЧАСТЬ: Годы и бейдж GPA */}
            <div className={styles.cardHeader}>
              <span className={styles.period}>{item.period}</span>
              {item.gpa && <span className={styles.gpaBadge}>{item.gpa}</span>}
            </div>

            {/* ОСНОВНАЯ ЧАСТЬ: Степень и Университет */}
            <div className={styles.cardMain}>
              {item.logo && (
                <img src={item.logo} alt={item.university} className={styles.logo} />
              )}
              <h3 className={styles.degree}>{item.degree}</h3>
              <p className={styles.university}>{item.university}</p>
            </div>

            {/* НИЖНЯЯ ЧАСТЬ: Блок дипломной работы (если есть) */}
            {item.thesis && (
              <div className={styles.thesisBlock}>
                <div className={styles.thesisContent}>
                  <span className={styles.thesisLabel}>Thesis Topic</span>
                  <h4 className={styles.thesisTitle}>"{item.thesis.title}"</h4>
                </div>
                
                <Link to={`/education-details/${item.eduId}`} className={styles.learnMoreBtn}>
                  Learn more 
                  <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </Link>
              </div>
            )}
            
          </div>
        ))}
      </div>
    </section>
  );
}