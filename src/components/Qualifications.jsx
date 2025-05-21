import styles from '../css-components/Qualifications.module.css';
import useTopDistanceTrigger from '../customhooks/useTopDistanceTrigger';
export default function Qualifications({ setIsMainContent }) {
    const divRef = useTopDistanceTrigger(setIsMainContent, 1);
    return (
        <div ref={divRef} id="qualifications-id"
            className={`global-Qualifications homeComponent 
        ${styles.qualifications}`}>
            <div className={styles.headContainer}>
                <h1 className={styles.mainHeading}>Qualifications</h1>
            </div>
            <div className={styles.timelineContainer}></div>
        </div>
    )
}