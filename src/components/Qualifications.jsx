import { useEffect, useRef } from 'react';
import styles from '../css-components/Qualifications.module.css';
import useTopDistanceTrigger from '../customhooks/useTopDistanceTrigger';
export default function Qualifications({ setIsMainContent }) {
    const scrollRef = useRef();
    const headingRef = useRef();

    const divRef = useTopDistanceTrigger(setIsMainContent, 1);

    useEffect(() => {
        const viewportHeight = window.innerHeight;
        let hasPassedMidpoint = false;

        function handleScroll() {
            if (scrollRef.current) {
                const { top } = scrollRef.current.getBoundingClientRect();
                const isAboveHalfway = top < (0.5 * viewportHeight);

                if (!hasPassedMidpoint && isAboveHalfway) {
                    if(headingRef.current) {
                        headingRef.current.textContent += 'Q';
                    }
                    hasPassedMidpoint = true;
                }

                if (hasPassedMidpoint && !isAboveHalfway) {
                    // Optional: reset flag if you scroll back down
                    hasPassedMidpoint = false;
                }
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const setRefs = (el) => {
        divRef.current = el;
        scrollRef.current = el;
    }
    return (
        <div ref={setRefs} id="qualifications-id"
            className={`global-Qualifications homeComponent 
        ${styles.qualifications}`}>
            <div className={styles.headContainer}>
                <h1 className={styles.mainHeading} ref={headingRef}></h1>
            </div>
            <div className={styles.timelineContainer}></div>
        </div>
    )
}