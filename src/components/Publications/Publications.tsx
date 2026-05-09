import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import styles from './Publications.module.css';

gsap.registerPlugin(ScrollTrigger);

interface PublicationItem {
  id: string;
  type: 'Publication' | 'Conference';
  year: string;
  title: string;
  venue: string;
  link?: string; // Ссылка на статью или видео
}

const pubData: PublicationItem[] = [
  {
    id: 'pub1',
    type: 'Publication',
    year: '2023',
    title: 'Development of a secure messenger with distributed architecture',
    venue: 'Journal of Information Security',
    link: '#',
  },
  {
    id: 'conf1',
    type: 'Conference',
    year: '2023',
    title: 'Optimizing team workflow in student research projects',
    venue: 'ITMO Science Days',
    link: '#',
  },
  // Можете добавить сюда другие ваши статьи
];

export default function Publications() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const rows = gsap.utils.toArray(`.${styles.row}`);
    
    gsap.fromTo(rows, 
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1, // Плавное появление по очереди
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%", // Анимация начнется, когда секция покажется на 75%
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.listContainer}>
        {pubData.map((item) => (
          <a 
            key={item.id} 
            href={item.link || '#'} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.row}
          >
            {/* Левая часть: Тип и Год */}
            <div className={styles.meta}>
              <span className={`${styles.badge} ${item.type === 'Conference' ? styles.badgeConf : styles.badgePub}`}>
                {item.type}
              </span>
              <div className={styles.yearAndVenue}>
                <span className={styles.year}>{item.year}</span>
                {/* Этот span будет виден только на телефонах */}
                <span className={styles.mobileVenue}> - {item.venue}</span>
              </div>
            </div>

            {/* Центральная часть: Название и Место */}
            <div className={styles.content}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.desktopVenue}>{item.venue}</p>
            </div>

            {/* Правая часть: Стрелочка (появляется при наведении) */}
            <div className={styles.arrowIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}