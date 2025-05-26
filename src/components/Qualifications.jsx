import styles from '../css-components/Qualifications.module.css';
import useTopDistanceTrigger from '../customhooks/useTopDistanceTrigger';
import useTypeAppearStyle from '../customhooks/useTypeAppearStyle';
import { qualificationsWordArray } from '../assets/Words';
import { useEffect, useRef } from 'react';

export default function Qualifications({ setIsMainContent }) {

    const [scrollRef, headingRef] = useTypeAppearStyle(qualificationsWordArray, 0.6, 0.15);

    const divRef = useTopDistanceTrigger(setIsMainContent, 1);

    const timelineRef = useRef(null);
    const qualificationsRef = useRef(null);

    const setRefs = (el) => {
        qualificationsRef.current = el;
        divRef.current = el;
        scrollRef.current = el;
    }

    useEffect(() => {
        const timeline = timelineRef.current;
        const container = qualificationsRef.current;

        function handleWheel(e) {
            const rect = container.getBoundingClientRect();

            // Check if qualifications section is at the top
            const isPinned = rect.top <= 0 && rect.bottom > window.innerHeight / 2;

            if (isPinned && timeline.scrollWidth > timeline.clientWidth) {
                console.log("Prevention Fired");
                // e.preventDefault(); // stop vertical scroll

                // Scroll horizontally
                timeline.scrollLeft += e.deltaY;
            }
        }

        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => window.removeEventListener('wheel', handleWheel);
    }, []);
    return (
        <div ref={setRefs} id="qualifications-id"
            className={`global-Qualifications homeComponent 
        ${styles.qualificationsContainer}`}>
            <div className={`${styles.qualifications}`}>
                <div className={styles.headContainer}>
                    <h1 className={styles.mainHeading} ref={headingRef}></h1>
                </div>
                <div className={styles.timelineContainer}
                    ref={timelineRef}>
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
        </div>
    )
}