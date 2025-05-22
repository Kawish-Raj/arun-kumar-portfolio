import { useEffect, useRef } from 'react';
import styles from '../css-components/Qualifications.module.css';
import useTopDistanceTrigger from '../customhooks/useTopDistanceTrigger';


export default function Qualifications({ setIsMainContent }) {

    const scrollRef = useRef();
    const headingRef = useRef();

    const divRef = useTopDistanceTrigger(setIsMainContent, 1);

    useEffect(() => {
        const viewportHeight = window.innerHeight;
        let hasPassedTOPMark = false;
        let hasPassedBOTTOMMark = true;
        let currLetterIndex = 0;
        let topCrossingRatio = 0.4;
        let bottomCrossingRatio = 0.4;
        const ratioReduceVal = 0.019
        const headingWord = ['Q', 'u', 'a', 'l', 'i', 'f', 'i', 'c', 'a', 't', 'i', 'o', 'n', 's'];


        function handleScroll() {
            if (scrollRef.current) {
                const { top } = scrollRef.current.getBoundingClientRect();
                const crossingTOPMark = top < (topCrossingRatio * viewportHeight);
                const crossingBOTTOMMark = top > (bottomCrossingRatio * viewportHeight);


                if (!hasPassedTOPMark && crossingTOPMark) {
                    console.log(`Start Top Mark ${(topCrossingRatio * viewportHeight)}`);
                    console.log(`Crossing Top Bottom Makr ${(bottomCrossingRatio * viewportHeight)}`);
                    if (headingRef.current) {
                        if (currLetterIndex === 0) {
                            headingRef.current.textContent += headingWord[currLetterIndex];
                            topCrossingRatio -= ratioReduceVal;
                            currLetterIndex++;
                            hasPassedBOTTOMMark = false;
                        }
                        else if (currLetterIndex === 13) {
                            headingRef.current.textContent += headingWord[currLetterIndex];
                            bottomCrossingRatio -= ratioReduceVal;
                            currLetterIndex++;
                            hasPassedTOPMark = true;
                        }
                        else if (currLetterIndex < headingWord.length) {
                            headingRef.current.textContent += headingWord[currLetterIndex];
                            topCrossingRatio -= ratioReduceVal;
                            bottomCrossingRatio -= ratioReduceVal;
                            currLetterIndex++;
                        }
                    }
                }

                if (!hasPassedBOTTOMMark && crossingBOTTOMMark) {
                    if (headingRef.current) {
                        if (currLetterIndex === 14) {
                            headingRef.current.textContent = headingRef.current.textContent.slice(0, -1);
                            bottomCrossingRatio += ratioReduceVal;
                            currLetterIndex--;
                            hasPassedTOPMark = false;
                        }
                        else if (currLetterIndex === 1) {
                            headingRef.current.textContent = headingRef.current.textContent.slice(0, -1);
                            topCrossingRatio += ratioReduceVal;
                            currLetterIndex--;
                            hasPassedBOTTOMMark = true;
                        }
                        else if (currLetterIndex > 0) {
                            headingRef.current.textContent = headingRef.current.textContent.slice(0, -1);
                            topCrossingRatio += ratioReduceVal;
                            bottomCrossingRatio += ratioReduceVal;
                            currLetterIndex--;
                        }
                    }
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