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
            <div className={styles.timelineContainer}>
                <ul className={styles.timelineList}>
                    <li className={styles.firstListItem}>
                        <div className={styles.sampleImage}>S</div>
                        <hr className={styles.firstHorizontalLine}></hr>
                        <div className={styles.timelineContent}>
                            <p>1996</p>
                            <h1>Masters in Education</h1>
                            <p>Guru Ghasi Das University</p>
                        </div>
                    </li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}