import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';
import styles from './Experience.module.css';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

import { Link } from 'react-router-dom';
import { jobsData } from '../../data/jobsData';


export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {

    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () =>{
    // 1. Создаем основной "захват" всей секции
      ScrollTrigger.create({
        id:"experiencePin",
        trigger: sectionRef.current,
        start: "top top",   // Захват начнется, когда верх секции будет в центре экрана
        end: "+=300%",         // Длительность захвата (чем больше, тем медленнее скролл)
        pin: wrapperRef.current, // Приклеиваем внутренний контейнер
        pinSpacing: true,       // Добавляет отступ снизу, чтобы контент не налезал
        scrub: 1,
        onUpdate: (self) => {
          // Вычисляем индекс на основе прогресса скролла (от 0 до 1)
          const progress = self.progress;
          const newIndex = Math.min(
            jobsData.length - 1, 
            Math.floor(progress * jobsData.length)
          );

          setActiveIndex(newIndex);
          
        }
      });
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  const handleClick = (index: number) => {
    // При клике скроллим к нужной точке внутри общего прогресса ScrollTrigger
    const trigger = ScrollTrigger.getById("experiencePin");
    
    if (trigger) {
      const startScroll = trigger.start;
      const totalScroll = trigger.end - trigger.start;
      
      // Высчитываем центр "буфера" для конкретного элемента.
      // Если у элемента буфер от 33% до 66%, мы скроллим ровно на 50%.
      const targetProgress = (index + 0.5) / jobsData.length;
      const targetScrollPosition = startScroll + (targetProgress * totalScroll);

      gsap.to(window, {
        duration: 0.5,
        scrollTo: targetScrollPosition,
        ease: "power2.inOut"
      });
    }
  };
const getItemCenterY = (index: number) => {
    const ITEM_HEIGHT = 32; 
    const SHORT_LINE = 20; 
    const LONG_LINE = 80;

    const itemsAbove = index * ITEM_HEIGHT;
    const linesAbove = index > 0 ? LONG_LINE + (index - 1) * SHORT_LINE : 0;
    
    return itemsAbove + linesAbove + (ITEM_HEIGHT / 2);
  };

  const translateYOffset = getItemCenterY(activeIndex);

  return (
    <section className={styles.section} ref={sectionRef}>

      <div className={styles.stickyWrapper} ref={wrapperRef}>

        <div className={styles.navContainer}>
          <div 
            className={styles.nav}
            style={{ transform: `translateY(-${translateYOffset}px)` }}
          >
            {jobsData.map((item, i) => {
              const isActive = activeIndex === i;
              const isNextActive = activeIndex === i + 1;
              
              const startX = isActive ? 56 : 6;
              const endX = isNextActive ? 56 : 6;

              return (
                <div key={item.id} className={styles.navItem}>
                  <button 
                    className={`${styles.dotWrapper} ${isActive ? styles.active : ''}`}
                    onClick={() => handleClick(i)}
                  >
                    <div className={styles.dot}></div>
                    <span className={styles.dotLabel}>{item.company}</span>
                  </button>

                  {i < jobsData.length - 1 && (
                    <div className={`${styles.lineWrapper} ${isActive || isNextActive ? styles.longLine : styles.shortLine}`}>
                      <svg viewBox="0 0 72 100" preserveAspectRatio="none" className={styles.svgLine}>
                        <path 
                          d={`M ${startX} 0 C ${startX} 50, ${endX} 50, ${endX} 100`} 
                          stroke="#1d1d1f" 
                          strokeWidth="2" 
                          fill="none" 
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/*<div className={styles.contentDisplay}>
          <div className={styles.infoCard} key={activeIndex}>
            {jobsData[activeIndex].logo && (
              <img 
                src={jobsData[activeIndex].logo} 
                alt={`${jobsData[activeIndex].company} logo`} 
                className={styles.cardLogo} 
              />
            )}
            <span className={styles.period}>{jobsData[activeIndex].period}</span>
            <h3 className={styles.role}>{jobsData[activeIndex].role}</h3>
            <p className={styles.desc}>{jobsData[activeIndex].shortDesc}</p>
            <Link 
              to={`/job-details/${jobsData[activeIndex].jobId}`} 
              className="btn-secondary"
            >
              Learn more <span>&gt;</span>
            </Link>
          </div>
        </div> */}

        <div className={styles.contentDisplay}>
          {/* 
            На десктопе мы показываем только одну карточку (activeIndex).
            На мобилке через CSS мы покажем их все списком.
          */}
          {jobsData.map((job, index) => (
            <div 
              className={`${styles.infoCard} ${index === activeIndex ? styles.activeCard : ''}`} 
              key={job.id}
            >
              {job.logo && (
                <img 
                  src={job.logo} 
                  alt={`${job.company} logo`} 
                  className={styles.cardLogo} 
                />
              )}
              <span className={styles.period}>{job.period}</span>
              {/* Выводим компанию, так как точки слева на мобилке не будет */}
              <h2 className={styles.mobileCompany}>{job.company}</h2> 
              <h3 className={styles.role}>{job.role}</h3>
              <p className={styles.desc}>{job.shortDesc}</p>
              <Link 
                to={`/job-details/${job.jobId}`} 
                className="btn-secondary"
              >
                Learn more <span>&gt;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}