import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import styles from './Skills.module.css';

gsap.registerPlugin(ScrollTrigger);

import { skillsData } from '../../data/skillsData.ts';


const FILTERS = ['All', 'frontend', 'backend', 'languages', 'databases', 'embedded', 'framework', 'robotics'];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null); // Ссылка на наш dropdown
  
  const [activeFilter, setActiveFilter] = useState('All');
  const [isOpen, setIsOpen] = useState(false); // Состояние открытого меню

  // Закрытие dropdown при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredSkills = skillsData.filter(skill => 
    activeFilter === 'All' ? true : skill.tags.includes(activeFilter)
  );

  useGSAP(() => {
    const cards = gsap.utils.toArray(`.${styles.skillCard}`);
    gsap.killTweensOf(cards);

    gsap.fromTo(cards, 
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );
  }, { dependencies: [activeFilter], scope: containerRef });

  const renderLevelDots = (level: number) => {
    return (
      <div className={styles.levelIndicator}>
        {[...Array(5)].map((_, index) => (
          <div 
            key={index} 
            className={`${styles.dot} ${index < level ? styles.dotFilled : styles.dotEmpty}`} 
          />
        ))}
      </div>
    );
  };

  // Красивое форматирование названия активного фильтра
  const displayFilterName = activeFilter === 'All' 
    ? 'All Skills' 
    : activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1);

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.contentWrapper}>

        {/* --- КАСТОМНЫЙ DROPDOWN --- */}
        <div className={styles.filterContainer}>
          <div className={styles.dropdownWrapper} ref={dropdownRef}>
            
            {/* Кнопка-триггер */}
            <button 
              className={styles.dropdownTrigger} 
              onClick={() => setIsOpen(!isOpen)}
            >
              <span>{displayFilterName}</span>
              {/* Иконка галочки/стрелочки, которая будет переворачиваться */}
              <svg 
                className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {/* Выпадающее меню */}
            {isOpen && (
              <ul className={styles.dropdownMenu}>
                {FILTERS.map((filter) => (
                  <li
                    key={filter}
                    className={`${styles.dropdownItem} ${activeFilter === filter ? styles.activeItem : ''}`}
                    onClick={() => {
                      setActiveFilter(filter);
                      setIsOpen(false); // Закрываем после выбора
                    }}
                  >
                    {filter === 'All' ? 'All Skills' : filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </li>
                ))}
              </ul>
            )}

          </div>
        </div>

        <div className={styles.grid}>
          {filteredSkills.map((skill) => (
            <div key={skill.id} className={styles.skillCard}>
              <div className={styles.skillInfo}>
                {skill.logo ? (
                  <img src={skill.logo} alt={`${skill.name} logo`} className={styles.skillLogo} />
                ) : (
                  <div className={styles.logoPlaceholder}></div>
                )}
                <span className={styles.skillName}>{skill.name}</span>
              </div>
              {renderLevelDots(skill.level)}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}