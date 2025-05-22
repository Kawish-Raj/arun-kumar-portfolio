import { useEffect, useRef } from 'react';
import styles from '../css-components/Qualifications.module.css';
import useTopDistanceTrigger from '../customhooks/useTopDistanceTrigger';
import useTypeAppearStyle from '../customhooks/useTypeAppearStyle';


export default function Qualifications({ setIsMainContent }) {


    const [scrollRef, headingRef] = useTypeAppearStyle();

    const divRef = useTopDistanceTrigger(setIsMainContent, 1);

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