import styles from '../css-components/Qualifications.module.css';
import useTopDistanceTrigger from '../customhooks/useTopDistanceTrigger';
import useTypeAppearStyle from '../customhooks/useTypeAppearStyle';
import { qualificationsWordArray } from '../assets/Words';
import { useEffect, useRef } from 'react';
import useSideBarEnterTrigger from '../customhooks/useSideBarEnterTrigger';

export default function Qualifications({ setIsMainContent, setSideBarQuali }) {

    const [scrollRef, headingRef] = useTypeAppearStyle(qualificationsWordArray, 0.6, 0.15);
    const sideBarRef = useSideBarEnterTrigger(setSideBarQuali, 60, 'sketch-mode', null);

    const divRef = useTopDistanceTrigger(setIsMainContent, 1);

    const timelineRef = useRef(null);
    const qualificationsContainerRef = useRef(null);
    const qualificationsRef = useRef(null);

    const setRefs = (el) => {
        qualificationsContainerRef.current = el;
        divRef.current = el;
        scrollRef.current = el;
        sideBarRef.current = el;
    }

    useEffect(() => {
        const onChangeContainer = qualificationsContainerRef.current;
        const onChangeTimeline = timelineRef.current;

        onChangeContainer.style.height = ((onChangeTimeline.scrollWidth - onChangeTimeline.clientWidth)+ (window.innerHeight) - ((window.innerWidth)/2)) + 'px';
        console.log('onchange useeffect called');
        console.log('height of container: ',onChangeContainer.style.height);
        console.log('width of the timeline: ', (onChangeTimeline.scrollWidth - onChangeTimeline.clientWidth));
    },[window.innerWidth]);

    useEffect(() => {
        const timeline = timelineRef.current;
        const container = qualificationsContainerRef.current;
        const qualifications = qualificationsRef.current;

        // container.style.height = (timeline.scrollWidth - timeline.clientWidth)  + 'px';

        function handleWheel() {
            const rect = qualifications.getBoundingClientRect();

            const scrollY = window.scrollY;
            const offsetTop = container.offsetTop;
            const pinStart = offsetTop;
            const pinEnd = offsetTop + timeline.scrollWidth - timeline.clientWidth;

            if ((scrollY >= pinStart && scrollY <= pinEnd)) {
                const scrollLeft = scrollY - pinStart;
                timeline.scrollLeft = scrollLeft;
            }
        }

        window.addEventListener('scroll', handleWheel, { passive: false });

        return () => window.removeEventListener('scroll', handleWheel);
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
                                <h2 className={styles.datePara}>2008</h2>
                                <h1 className={styles.degreeHeading}>Masters in Education</h1>
                                <h3 className={styles.universityName}>Guru Ghasi Das University,</h3>
                                <p className={styles.placeName}>Chhattisgarh.</p>
                                <p className={styles.divison}>1st Division</p>
                            </div>
                        </li>
                        <li className={`${styles.listItem} ${styles.evenItem}`}>
                            <hr className={`${styles.beforeHrLine} ${styles.horizontalStyling}`}></hr>
                            <div className={`${styles.sampleImage} ${styles.sampleImageStyling}`}></div>
                            <hr className={`${styles.afterHrLine} ${styles.horizontalStyling}`}></hr>
                            <div className={styles.timelineContent}>
                                <h2 className={styles.datePara}>1996</h2>
                                <h1 className={styles.degreeHeading}>Bachelors in Education</h1>
                                <h3 className={styles.universityName}>B.R.Ambedkar Bihar University,</h3>
                                <p className={styles.placeName}>Muzaffarpur.</p>
                                <p className={styles.divison}>1st Division</p>
                            </div>
                        </li>
                        <li className={`${styles.listItem} ${styles.oddItem}`}>
                            <hr className={`${styles.beforeHrLine} ${styles.horizontalStyling}`}></hr>
                            <div className={`${styles.sampleImage} ${styles.sampleImageStyling}`}></div>
                            <hr className={`${styles.afterHrLine} ${styles.horizontalStyling}`}></hr>
                            <div className={styles.timelineContent}>
                                <h2 className={styles.datePara}>1989</h2>
                                <h1 className={styles.degreeHeading}>Masters in Arts</h1>
                                <h3 className={styles.universityName}>B.R.Ambedkar University,</h3>
                                <p className={styles.placeName}>Muzaffarpur.</p>
                                <p className={styles.divison}>1st Division</p>
                            </div>
                        </li>
                        <li className={`${styles.listItem} ${styles.evenItem}`}>
                            <hr className={`${styles.beforeHrLine} ${styles.horizontalStyling}`}></hr>
                            <div className={`${styles.sampleImage} ${styles.sampleImageStyling}`}></div>
                            <hr className={`${styles.afterHrLine} ${styles.horizontalStyling}`}></hr>
                            <div className={styles.timelineContent}>
                                <h2 className={styles.datePara}>1987</h2>
                                <h1 className={styles.degreeHeading}>Bachelors in Arts(Honours)</h1>
                                <h3 className={styles.universityName}>B.R.Ambedkar University,</h3>
                                <p className={styles.placeName}>Muzaffarpur.</p>
                                <p className={styles.divison}>1st Division</p>
                            </div>
                        </li>
                        <li className={`${styles.listItem} ${styles.oddItem}`}>
                            <hr className={`${styles.beforeHrLine} ${styles.horizontalStyling}`}></hr>
                            <div className={`${styles.sampleImage} ${styles.sampleImageStyling}`}></div>
                            <hr className={`${styles.afterHrLine} ${styles.horizontalStyling}`}></hr>
                            <div className={styles.timelineContent}>
                                <h2 className={styles.datePara}>1984</h2>
                                <h1 className={styles.degreeHeading}>Sr. Secondary School Examination</h1>
                                <h3 className={styles.universityName}>Bihar Intermediate Education Council,</h3>
                                <p className={styles.placeName}>Patna.</p>
                                <p className={styles.divison}>1st Division</p>
                            </div>
                        </li>
                        <li className={`${styles.listItem} ${styles.evenItem} ${styles.lastItem}`}>
                            <hr className={`${styles.beforeHrLine} ${styles.horizontalStyling}`}></hr>
                            <div className={`${styles.sampleImage} ${styles.sampleImageStyling}`}></div>
                            <hr className={`${styles.afterHrLine} ${styles.horizontalStyling}`}></hr>
                            <div className={styles.timelineContent}>
                                <h2 className={styles.datePara}>1982</h2>
                                <h1 className={styles.degreeHeading}>Secondary School Examination</h1>
                                <h3 className={styles.universityName}>Bihar School Examination Board,</h3>
                                <p className={styles.placeName}>Patna.</p>
                                <p className={styles.divison}>1st Division</p>
                            </div>
                            <div className={`${styles.lastRectImage} ${styles.rectImageStyling}`}></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}