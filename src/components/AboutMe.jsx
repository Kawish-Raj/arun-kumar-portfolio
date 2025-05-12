import styles from '../css-components/AboutMe.module.css';
import useTopDistanceTrigger from '../customhooks/useTopDistanceTrigger';
import { useEffect, useRef } from 'react';
import useSideBarEnterTrigger from '../customhooks/useSideBarEnterTrigger';

export default function AboutMe({ setIsMainContent, setSideBarMode }) {
    const divRef1 = useTopDistanceTrigger(setIsMainContent, 0);
    const divRef2 = useSideBarEnterTrigger(setSideBarMode);
    
    const setRefs = (el) => {
        divRef1.current = el;
        divRef2.current = el;
    };
    return (
        <div id="about-id" ref={setRefs} className={`global-AboutMe homeComponent ${styles.aboutMe}`}>
            <div className={`${styles.aboutMeCanvas}`}>
            <div className={`${styles.headingContainer}`}>
                <div>hi.</div>
                <div>i'm</div>
                <div>arun kumar</div>
            </div>
            </div>
        </div>
    )
}