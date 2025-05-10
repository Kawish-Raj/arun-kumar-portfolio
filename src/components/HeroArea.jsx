import styles from '../css-components/HeroArea.module.css';
import { useEffect, useRef, createRef } from 'react';
import words from '../assets/Words';
import ScrollExtraLetters from './ScrollExtraLetters';

export default function HeroArea() {
    const speeds = [0.3, -0.2, 0.7, -1.3, 0.5, -0.7]; // can randomize or customize more
    const letters = [...words[0], ...words[1], ...words[2], ...words[3]]
    const rotationSpeeds = [0.01, 0.03, -0.02, 0.009, -0.01];

    // Create a list of refs dynamically for each letter
    const refs = useRef(letters.map(() => createRef()));

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;

            if (scrollY < (0.5 * viewportHeight)) {
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
        <>
        <div className={`global-HeroArea homeComponent ${styles.heroArea}`}>
            <div className={styles.tagLineContainer}>
                {words.map((word, wordIdx) => (
                    <div key={wordIdx} className={styles.wordContainer}>
                        {word.map((letter, idx) => {
                            const flatIndex = words.slice(0, wordIdx).reduce((sum, w) => sum + w.length, 0) + idx;
                            return (
                                <div key={flatIndex} ref={refs.current[flatIndex]}>
                                    {letter}
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
        <ScrollExtraLetters/>
        </>
    );
}
