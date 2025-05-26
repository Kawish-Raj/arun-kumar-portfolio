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
                    <li className={`${styles.firstListItem} ${styles.oddItem}`}>
                        <div className={`${styles.sampleImage} ${styles.sampleImageStyling}`}></div>
                        <hr className={`${styles.firstHorizontalLine} ${styles.horizontalStyling}`}></hr>
                        <div className={styles.timelineContent}>
                            <p className={styles.datePara}>1996</p>
                            <h1 className={styles.degreeHeading}>Masters in Education</h1>
                            <p className={styles.universityName}>Guru Ghasi Das University,</p>
                            <p className={styles.divison}>1st Division</p>
                        </div>
                    </li>
                    <li className={`${styles.listItem} ${styles.evenItem}`}>
                        <hr className={`${styles.beforeHrLine} ${styles.horizontalStyling}`}></hr>
                        <div className={`${styles.sampleImage} ${styles.sampleImageStyling}`}></div>
                        <hr className={`${styles.afterHrLine} ${styles.horizontalStyling}`}></hr>
                        <div className={styles.timelineContent}>
                            <p className={styles.datePara}>1996</p>
                            <h1 className={styles.degreeHeading}>Masters in Education</h1>
                            <p className={styles.universityName}>Guru Ghasi Das University,</p>
                            <p className={styles.divison}>1st Division</p>
                        </div>
                    </li>
                    <li className={`${styles.listItem} ${styles.oddItem}`}>
                        <hr className={`${styles.beforeHrLine} ${styles.horizontalStyling}`}></hr>
                        <div className={`${styles.sampleImage} ${styles.sampleImageStyling}`}></div>
                        <hr className={`${styles.afterHrLine} ${styles.horizontalStyling}`}></hr>
                        <div className={styles.timelineContent}>
                            <p className={styles.datePara}>1996</p>
                            <h1 className={styles.degreeHeading}>Masters in Education</h1>
                            <p className={styles.universityName}>Guru Ghasi Das University,</p>
                            <p className={styles.divison}>1st Division</p>
                        </div>
                    </li>
                    <li className={`${styles.listItem} ${styles.evenItem}`}>
                        <hr className={`${styles.beforeHrLine} ${styles.horizontalStyling}`}></hr>
                        <div className={`${styles.sampleImage} ${styles.sampleImageStyling}`}></div>
                        <hr className={`${styles.afterHrLine} ${styles.horizontalStyling}`}></hr>
                        <div className={styles.timelineContent}>
                            <p className={styles.datePara}>1996</p>
                            <h1 className={styles.degreeHeading}>Masters in Education</h1>
                            <p className={styles.universityName}>Guru Ghasi Das University,</p>
                            <p className={styles.divison}>1st Division</p>
                        </div>
                    </li>
                    <li className={`${styles.listItem} ${styles.oddItem}`}>
                        <hr className={`${styles.beforeHrLine} ${styles.horizontalStyling}`}></hr>
                        <div className={`${styles.sampleImage} ${styles.sampleImageStyling}`}></div>
                        <hr className={`${styles.afterHrLine} ${styles.horizontalStyling}`}></hr>
                        <div className={styles.timelineContent}>
                            <p className={styles.datePara}>1996</p>
                            <h1 className={styles.degreeHeading}>Masters in Education</h1>
                            <p className={styles.universityName}>Guru Ghasi Das University,</p>
                            <p className={styles.divison}>1st Division</p>
                        </div>
                    </li>
                    <li className={`${styles.listItem} ${styles.evenItem}`}>
                        <hr className={`${styles.beforeHrLine} ${styles.horizontalStyling}`}></hr>
                        <div className={`${styles.sampleImage} ${styles.sampleImageStyling}`}></div>
                        <hr className={`${styles.afterHrLine} ${styles.horizontalStyling}`}></hr>
                        <div className={styles.timelineContent}>
                            <p className={styles.datePara}>1996</p>
                            <h1 className={styles.degreeHeading}>Masters in Education</h1>
                            <p className={styles.universityName}>Guru Ghasi Das University,</p>
                            <p className={styles.divison}>1st Division</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}