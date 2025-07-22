import styles from '../css-components/Work.module.css';
import useTopDistanceTrigger from '../customhooks/useTopDistanceTrigger';
import { useRef, useEffect } from 'react';
import papaPlaying from "../assets/papa-images/papa-playing.jpg"
import papaSitting from "../assets/papa-images/papa-sitting.jpg"

export default function Work({ setIsMainContent }) {

    const workComponentRef = useRef(null);

    const setRefs = (el) => {
        divRef.current = el;
        workComponentRef.current = el;
    }

    const divRef = useTopDistanceTrigger(setIsMainContent, 2);

    // useEffect for circle transition
    useEffect(() => {
        const workComponent = workComponentRef.current;
        const firstHeadingEl = workComponent.querySelector(`.${styles.firstHeading}`);
        const firstExperienceEl = workComponent.querySelector(`.${styles.firstExperience}`);

        function handleScroll() {
            const scrollY = window.scrollY;
            const offsetTop = workComponent.offsetTop;
            const pinStart = offsetTop;
            // const pinEnd = offsetTop + workComponent.getBoundingClientRect().height;
            const noOfExperiences = 3;
            const experienceLength = workComponent.getBoundingClientRect().height / noOfExperiences;
            const windowHeight = window.innerHeight;
            const residueLength = experienceLength - windowHeight;

            console.log("experience length: ", experienceLength)
            console.log("container length: ", workComponent.getBoundingClientRect().height);
            console.log("window height", window.innerHeight);

            //BEFORE first heading
            //  scrollY < pinStart
            if (scrollY < pinStart) {
                firstHeadingEl.style.maskImage = `radial-gradient(circle, black 100%, transparent 100%)`;
                firstHeadingEl.style.webkitMaskImage = `radial-gradient(circle, black 100%, transparent 100%)`;
            }

            //TRANSITION from First Head --> First Experience
            //  scrollY >= pinStart && scrollY <= (pinStart + windowHeight)
            else if (scrollY >= pinStart && scrollY <= (pinStart + windowHeight)) {
                const percentage = (100 - ((scrollY - pinStart) / window.innerHeight) * 100);

                const clamped = Math.max(0, Math.min(percentage, 100)); // keep between 0–100

                firstHeadingEl.style.zIndex = "20";

                firstHeadingEl.style.maskImage = `radial-gradient(circle, black ${clamped}%, transparent ${clamped}%)`;
                firstHeadingEl.style.webkitMaskImage = `radial-gradient(circle, black ${clamped}%, transparent ${clamped}%)`;

                firstExperienceEl.style.maskImage = `linear-gradient(to bottom, black 100%, transparent 100%)`;
                firstExperienceEl.style.webkitMaskImage = `radial-gradient(to bottom, black 100%, transparent 100%)`;
            }

            //DURING First Experience Residual Part
            //  scrollY >= (pinStart + windowHeight) && scrollY <= (pinStart + experienceLength)
            else if (scrollY >= (pinStart + windowHeight) && scrollY <= (pinStart + experienceLength)) {
                firstHeadingEl.style.maskImage = `radial-gradient(circle, black 0%, transparent 0%)`;
                firstHeadingEl.style.webkitMaskImage = `radial-gradient(circle, black 0%, transparent 0%)`;
                firstHeadingEl.style.zIndex = "-1";
            }

            //TRANSITION from First Experience --> Second Experience
            //  scrollY >= (pinStart + experienceLength) && scrollY <= (pinStart + experienceLength + windowHeight)
            else if (scrollY >= (pinStart + experienceLength) && scrollY <= (pinStart + experienceLength + windowHeight)) {

                const percentage = (100 - ((scrollY - (pinStart + experienceLength)) / window.innerHeight) * 100);

                const clamped = Math.max(0, Math.min(percentage, 100)); // keep between 0–100

                firstExperienceEl.style.zIndex = "18";
                firstExperienceEl.style.maskImage = `linear-gradient(to bottom, black ${clamped}%, transparent ${clamped}%)`;
                firstExperienceEl.style.webkitMaskImage = `linear-gradient(bottom, black ${clamped}%, transparent ${clamped}%)`;
            }

            //DURING Second Experience Residual Part
            //  scrollY >= (pinStart + experienceLength + windowHeight) && scrollY >= (pinStart + (2*experienceLength))
            else if (scrollY >= (pinStart + experienceLength + windowHeight) && scrollY >= (pinStart + (2 * experienceLength))) {
                firstExperienceEl.style.maskImage = `linear-gradient(to bottom, black 0%, transparent 0%)`;
                firstExperienceEl.style.webkitMaskImage = `linear-gradient(bottom, black 0%, transparent 0%)`;
                firstExperienceEl.style.zIndex = "-2";
            }

        }

        window.addEventListener('scroll', handleScroll, { passive: false });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div ref={setRefs} id="work-id" className={`global-Work ${styles.work}`}>
            {/* <h1>Work and Experiences</h1> */}
            <div className={styles.stickyWorkContainer}>
                <div className={styles.firstHeading}>
                    <h1>My Work</h1>
                    <h1>and</h1>
                    <h1>Experience</h1>
                </div>
                <div className={styles.firstExperience}>
                    <div className={styles.colorPillar}></div>
                    <div className={styles.expContainer}>
                        <div className={styles.textContent}>
                            <h1 className={styles.expHeading}>Experience 1</h1>
                            <p className={styles.firstPara}>
                        Just writing whatever I want to.
                        I didn't want to use Lrem Impusm cause it's for
                        losers. I don't get it why it's popular when you can 
                        fill the paras with whatever you want. Just write anything and 
                        no one will notice cause its filler content my mate. </p>
                    <p className={styles.secondPara}>Just writing whatever I want to.
                        I didn't want to use Lrem Impusm cause it's for
                        losers. I don't get it why it's popular when you can 
                        fill the paras with whatever you want. Just write anything and 
                        no one will notice cause its filler content my mate.</p>
                        </div>
                        <div className={styles.imageContent}>
                            <img className={styles.expImage} src={papaSitting} alt='sir playing image'></img>
                        </div>
                    </div>
                </div>
                <div className={styles.secondExperience}>
                    <h1 classname={styles.expHeading}>Kawish</h1>
                </div>
            </div>
        </div>

    )
}