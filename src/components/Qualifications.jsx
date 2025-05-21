import { useEffect, useRef } from 'react';
import styles from '../css-components/Qualifications.module.css';
import useTopDistanceTrigger from '../customhooks/useTopDistanceTrigger';
export default function Qualifications({ setIsMainContent }) {
    const scrollRef = useRef();
    const headingRef = useRef();
    const headingWord = ['Q','u','a','l','i','f','i','c','a','t','i','o','n','s'];

    const divRef = useTopDistanceTrigger(setIsMainContent, 1);

    useEffect(() => {
        const viewportHeight = window.innerHeight;
        let hassPassedTheMark = false;
        let crossingRatio = 0.4;
        let currLetterIndex = 0;

        function handleScroll() {
            if (scrollRef.current) {
                const { top } = scrollRef.current.getBoundingClientRect();
                const crossingMark = top < (crossingRatio * viewportHeight);

                if (!hassPassedTheMark && crossingMark) {
                    if(headingRef.current) {
                        if(currLetterIndex < headingWord.length){
                            headingRef.current.textContent += headingWord[currLetterIndex];
                            crossingRatio -= 0.019;
                            currLetterIndex++;
                        }
                        else{
                            hassPassedTheMark = true;
                            crossingRatio = 0.4;
                            // currLetterIndex = 0;
                        }
                    }
                    // hassPassedTheMark = true;
                }

                if (hassPassedTheMark && !crossingMark) {
                    // Optional: reset flag if you scroll back down
                    hassPassedTheMark = false;
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