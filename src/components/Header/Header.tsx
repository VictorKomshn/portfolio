import { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom'; // Добавили хуки роутера
import styles from './Header.module.css';

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation(); // Узнаем текущий путь

  const isHome = location.pathname === '/';

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isHome) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Начальная проверка (если вдруг обновили страницу посредине)
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={`${styles.header} ${isVisible ? styles.visible : ''} ${!isHome ? styles.innerPage : ''}`}>
      <div className={styles.container}>
        
        {!isHome && (
          <Link to="/" className={styles.backButton}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back
          </Link>
        )}

        {/* ЛЕВАЯ ЧАСТЬ: Иконки контактов */}
        <div className={styles.iconsGroup}>
          <a href="mailto:victorkomyshan@gmail.com" className={styles.iconLink} aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
          
          <a href="https://github.com/VictorKomshn" target="_blank" rel="noopener noreferrer" className={`${styles.iconLink} ${styles.githubLink}`} aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>

          <a href="tel:+436787919387" className={styles.iconLink} aria-label="Phone">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </a>
        </div>

        <div className={styles.nameBlock}>
          <span className={styles.name}>Viktor Komyshan</span>
        </div>

        <div className={styles.resumeWrapper} ref={dropdownRef}>
          <button 
            className={styles.resumeButton} 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            aria-expanded={isDropdownOpen}
          >
            Resume
            {/* Иконка стрелочки вниз */}
            <svg 
              className={`${styles.chevron} ${isDropdownOpen ? styles.chevronOpen : ''}`} 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>

          {/* Выпадающее меню */}
          {isDropdownOpen && (
            <div className={styles.dropdownMenu}>
              <a 
                href="https://drive.google.com/file/d/160OpOL0QOFzRrSFjlMDXoz5DkLfmiwWQ/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.dropdownItem}
                onClick={() => setIsDropdownOpen(false)}
              >
                <div className={styles.itemTitle}>Software Engineering</div>
                <div className={styles.itemSubtitle}>C# / .NET</div>
              </a>
              
              <div className={styles.divider}></div>

              <a 
                href="https://drive.google.com/file/d/10vvkDmzAKjfUCciCQkuUQ70XNUzMk4Rw/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.dropdownItem}
                onClick={() => setIsDropdownOpen(false)}
              >
                <div className={styles.itemTitle}>Embedded Systems</div>
                <div className={styles.itemSubtitle}>C++ / ROS / Robotics</div>
              </a>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}