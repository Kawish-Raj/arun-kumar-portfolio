import { extraLetters } from "../assets/Words";
import styles from '../css-components/HeroArea.module.css'
import { useEffect, useRef, createRef } from "react";

export default function ScrollExtraLetters() {
    const speeds = [-2.3, -1.6, -0.7, -1.3, -1.5];
    const rotationSpeeds = [0.01, 0.03, -0.02, 0.009, -0.01];
    const refs = useRef(extraLetters.map(() => createRef()));

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;

            refs.current.forEach((ref, idx) => {
                const speed = speeds[idx % speeds.length];
                const rotationSpeed = rotationSpeeds[idx % rotationSpeeds.length];
                if (ref.current) {
                    ref.current.style.transform = `translateY(${scrollY * speed}px) rotate(${scrollY * rotationSpeed}deg)`;
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`${styles.tagLineContainer} ${styles.extraWordsContainer}`}>
            <div className={styles.wordContainer}>
                {extraLetters.map((letter, idx) => {
                    return (
                        <div
                            key={idx}
                            ref={refs.current[idx]}>
                            {letter}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}