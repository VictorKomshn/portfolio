import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import styles from './Languages.module.css';

gsap.registerPlugin(ScrollTrigger);

// Интерфейс для языка
interface Language {
  id: string;
  name: string;
  code: string; // Короткий код (например, EN, RU, DE)
  level: string; // Native, C1, A2 и т.д.
  desc: string; // Короткое описание навыка
  type: 'native' | 'advanced' | 'basic'; // Для цветовой дифференциации
}

const languagesData: Language[] = [
  { 
    id: 'l1', 
    name: 'English', 
    code: 'EN', 
    level: 'C1', 
    desc: 'Advanced',
    type: 'advanced' 
  },
  { 
    id: 'l2', 
    name: 'German', // Можете заменить на свой
    code: 'DE', 
    level: 'A2', 
    desc: 'Basic',
    type: 'basic' 
  },
  { 
    id: 'l3', 
    name: 'Spanish', // Можете заменить на свой
    code: 'ES', 
    level: 'A2', 
    desc: 'Basic',
    type: 'basic' 
  },
    { 
    id: 'l4', 
    name: 'Russian', 
    code: 'RU', 
    level: 'Native', 
    desc: 'Native',
    type: 'native' 
  }
];

export default function Languages() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(`.${styles.card}`);
    
    gsap.fromTo(cards, 
      { y: 40, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section className={styles.section} ref={containerRef}>


      <div className={styles.grid}>
        {languagesData.map((lang) => (
          <div key={lang.id} className={styles.card}>
            
            <div className={styles.cardHeader}>
              {/* Короткий код языка как элемент дизайна */}
              <span className={styles.langCode}>{lang.code}</span>
              
              {/* Динамический класс для цвета бейджа */}
              <span className={`${styles.badge} ${styles[lang.type]}`}>
                {lang.level}
              </span>
            </div>

            <div className={styles.cardBody}>
              <h3 className={styles.langName}>{lang.name}</h3>
              <p className={styles.langDesc}>{lang.desc}</p>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}