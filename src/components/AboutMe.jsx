import styles from '../css-components/AboutMe.module.css';
import useTopDistanceTrigger from '../customhooks/useTopDistanceTrigger';
import { useEffect, useRef } from 'react';
import useSideBarEnterTrigger from '../customhooks/useSideBarEnterTrigger';

export default function AboutMe({ setIsMainContent, setSideBarMode }) {
    const divRef1 = useTopDistanceTrigger(setIsMainContent, 0);
    const divRef2 = useSideBarEnterTrigger(setSideBarMode, 60);
    
    const setRefs = (el) => {
        divRef1.current = el;
        divRef2.current = el;
    };
    return (
        <div id="about-id" ref={setRefs} className={`global-AboutMe homeComponent ${styles.aboutMe}`}>
            <div className={`${styles.aboutMeCanvas}`}>
            <div className={`${styles.headingContainer}`}>
                <div className={styles.headingWord}>hi.</div>
                <div className={styles.headingWord}>i'm</div>
                <div className={styles.headingWord}>arun kumar.</div>
            </div>
            <div className={styles.aboutmePara}> 
                <p>I began my journey in education as a simple school teacher,
                     and over the years, I have remained deeply committed to this
                      field. I have always believed that education is one of the 
                      most powerful tools for positive change, not just for 
                      individuals, but for society as a whole.
                </p>
                <p>
                    Throughout my career, I’ve been fortunate to be involved in 
                    establishing and managing educational institutions across 
                    Bihar and Jharkhand. My focus has consistently been on 
                    improving the quality of education at both school and college 
                    levels. I try to personally stay involved in the functioning of 
                    these institutions to ensure that students and teachers have the 
                    right environment to grow.
                </p>
            </div>
            </div>
        </div>
    )
}