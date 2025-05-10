import styles from '../css-components/HeroArea.module.css';
import { useEffect, useRef, createRef } from 'react';

export default function HeroArea() {
  const speeds = [0.3, -0.2, 0.7, -1.3, 0.5]; // can randomize or customize more
  const word1 = ['B', 'u', 'i', 'l', 'd', 'i', 'n', 'g'];
  const word2 = ['T', 'o', 'm', 'o', 'r', 'r', 'o', 'w', "'", 's']
  const letters = [...word1, ...word2]
  const rotationSpeeds = [0.01, 0.03, -0.02, 0.009, -0.01 ];
  
  // Create a list of refs dynamically for each letter
  const refs = useRef(letters.map(() => createRef()));

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
  
      if (scrollY < viewportHeight) {
        refs.current.forEach((ref, idx) => {
          const speed = speeds[idx % speeds.length];
          const rotationSpeed = rotationSpeeds[idx % rotationSpeeds.length];
          if (ref.current) {
            ref.current.style.transform = `translateY(${scrollY * speed}px) rotate(${scrollY * rotationSpeed}deg)`;
          }
        });
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`global-HeroArea homeComponent ${styles.heroArea}`}>
      <div className={styles.tagLineContainer}>
        <div className={styles.wordContainer}>
        {word1.map((letter, idx) => (
          <div
            key={idx}
            ref={refs.current[idx]}>{letter}</div>
        ))}
        </div>
        <div className={styles.wordContainer}>
        {word2.map((letter, idx) => (
          <div
            key={idx + (word1.length - 1)}
            ref={refs.current[idx + (word1.length - 1)]}>{letter}</div>
        ))}
        </div>
        



        {/* <div>ing</div> */}
        {/* <div> Tomorrow's</div> */}
        <div> Schools</div>
        <div> Today</div>
      </div>
    </div>
  );
}
