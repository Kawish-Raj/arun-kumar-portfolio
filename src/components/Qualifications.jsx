import styles from '../css-components/Qualifications.module.css';
import useTopDistanceTrigger from '../customhooks/useTopDistanceTrigger';
import useTypeAppearStyle from '../customhooks/useTypeAppearStyle';
import { qualificationsWordArray } from '../assets/Words';

export default function Qualifications({ setIsMainContent }) {

    const [scrollRef, headingRef] = useTypeAppearStyle(qualificationsWordArray, 0.6, 0.15);

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