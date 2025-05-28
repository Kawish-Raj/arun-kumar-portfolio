import styles from '../css-components/Qualifications.module.css';
import useTopDistanceTrigger from '../customhooks/useTopDistanceTrigger';
import useTypeAppearStyle from '../customhooks/useTypeAppearStyle';
import { qualificationsWordArray } from '../assets/Words';
import { useEffect, useRef } from 'react';

export default function Qualifications({ setIsMainContent }) {

    const [scrollRef, headingRef] = useTypeAppearStyle(qualificationsWordArray, 0.6, 0.15);

    const divRef = useTopDistanceTrigger(setIsMainContent, 1);

    const timelineRef = useRef(null);
    const qualificationsContainerRef = useRef(null);
    const qualificationsRef = useRef(null);

    const setRefs = (el) => {
        qualificationsContainerRef.current = el;
        divRef.current = el;
        scrollRef.current = el;
    }

    useEffect(() => {
        const timeline = timelineRef.current;
        const container = qualificationsContainerRef.current;
        const qualifications = qualificationsRef.current;

        container.style.height = (timeline.scrollWidth - timeline.clientWidth) + (window.innerHeight + 200) + 'px';

        function handleWheel(e) {
            const rect = qualifications.getBoundingClientRect();

            // Check if qualifications section is at the top
            const isPinned = rect.top === 0;

            if (isPinned) {
                timeline.scrollLeft += e.deltaY;
            }
        }

        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => window.removeEventListener('wheel', handleWheel);
    }, []);

    useEffect(() => {
    const listItems = document.querySelectorAll(`li > .${styles.timelineContent}`);

    const observerOptions = {
        root: null, // viewport
        threshold: 0.8 // 80% of item visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(`${styles.fadeIn}`);
                // observer.unobserve(entry.target); // Optional: remove observer after fade-in
            }
            else {
                entry.target.classList.remove(styles.fadeIn);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    listItems.forEach(li => observer.observe(li));

    return () => observer.disconnect(); // Clean up
}, []);
    return (
        <div ref={setRefs} id="qualifications-id"
            className={`global-Qualifications homeComponent 
        ${styles.qualificationsContainer}`}>
            <div className={`${styles.qualifications}`}
            ref={qualificationsRef} >
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