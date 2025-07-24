import styles from '../css-components/Work.module.css';
import useTopDistanceTrigger from '../customhooks/useTopDistanceTrigger';
import { useRef, useEffect } from 'react';
import papaPlaying from "../assets/papa-images/papa-playing.jpg"
import papaSitting from "../assets/papa-images/papa-sitting.jpg"
import papaCutting from "../assets/papa-images/papa-cutting.jpg"
import inspection from "../assets/papa-images/inspection.jpg"
import schoolRoses from "../assets/papa-images/schoolroses.jpg"

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
        const secondExperienceEl = workComponent.querySelector(`.${styles.secondExperience}`);

        function handleScroll() {
            const scrollY = window.scrollY;
            const offsetTop = workComponent.offsetTop;
            const pinStart = offsetTop;
            const noOfExperiences = 4;
            const experienceLength = workComponent.getBoundingClientRect().height / noOfExperiences;
            const windowHeight = window.innerHeight;
            const residueLength = experienceLength - windowHeight;

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
            else if (scrollY >= (pinStart + experienceLength + windowHeight) && scrollY <= (pinStart + (2 * experienceLength))) {
                firstExperienceEl.style.maskImage = `linear-gradient(to bottom, black 0%, transparent 0%)`;
                firstExperienceEl.style.webkitMaskImage = `linear-gradient(bottom, black 0%, transparent 0%)`;
                firstExperienceEl.style.zIndex = "-2";
            }

            //TRANSITION from Second Experience --> Third Experience
            // scrollY >= (pinStart + (2 * experienceLength)) && scrollY <= (pinStart + (2 * experienceLength) + windowHeight)
            else if (scrollY >= (pinStart + (2 * experienceLength)) && scrollY <= (pinStart + (2 * experienceLength) + windowHeight)) {
                const percentage = (100 - ((scrollY - (pinStart + (2 * experienceLength))) / window.innerHeight) * 100);

                const clamped = Math.max(0, Math.min(percentage, 100)); // keep between 0–100

                secondExperienceEl.style.zIndex = "16";
                secondExperienceEl.style.maskImage = `linear-gradient(to bottom, black ${clamped}%, transparent ${clamped}%)`;
                secondExperienceEl.style.webkitMaskImage = `linear-gradient(bottom, black ${clamped}%, transparent ${clamped}%)`;
            }

            //During Thrid Experience Residual Part
            // 
            else if (scrollY >= (pinStart + (2 * experienceLength) + windowHeight) && scrollY <= (pinStart + (3 * experienceLength))) {
                secondExperienceEl.style.maskImage = `linear-gradient(to bottom, black 0%, transparent 0%)`;
                secondExperienceEl.style.webkitMaskImage = `linear-gradient(bottom, black 0%, transparent 0%)`;
                secondExperienceEl.style.zIndex = "-3";
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
                                no one will notice cause its filler content my mate. 
                            </p>
                            <p className={styles.secondPara}>Just writing whatever I want to.
                                I didn't want to use Lrem Impusm cause it's for
                                losers. I don't get it why it's popular when you can
                                fill the paras with whatever you want. Just write anything and
                                no one will notice cause its filler content my mate.
                            </p>
                        </div>
                        <div className={styles.imageContent}>
                            <img className={styles.expImage} src={papaCutting} alt='sir playing image'></img>
                            <img className={`${styles.expImage} ${styles.expImageRightTilt}`} src={papaSitting} alt='sir sitting image'></img>
                        </div>
                    </div>
                </div>
                <div className={styles.secondExperience}>
                    <div className={styles.colorPillar}></div>
                    <div className={styles.expContainer}>
                        <div className={styles.textContent}>
                            <h1 className={styles.expHeading}>2nd Experience</h1>
                            <p className={styles.firstPara}>
                                What was I going to write. A sentence. Two sentences.
                                Write this To the whole world. Still nah hypotheticaly scenario.
                                Bihar is the best state. Better than all of them. I am studying with
                                two idiots in RMIT building 8. </p>
                            <p className={styles.secondPara}>Just writing whatever I want to.
                                I didn't want to use Lrem Impusm cause it's for
                                losers. I don't get it why it's popular when you can
                                fill the paras with whatever you want. Just write anything and
                                no one will notice cause its filler content my mate.</p>
                        </div>
                        <div className={styles.imageContent}>
                            <img className={styles.expImage} src={papaPlaying} alt='sir playing image'></img>
                            <img className={`${styles.expImageRightTilt} ${styles.expImage}`} src={inspection} alt='science fair inspection'></img>
                        </div>
                    </div>
                </div>
                <div className={styles.thirdExperience}>
                    <div className={styles.colorPillar}></div>
                    <div className={styles.expContainer}>
                        <div className={styles.textContent}>
                            <h1 className={styles.expHeading}>3rd Experience</h1>
                            <p className={styles.firstPara}>
                                What was I going to write. A sentence. Two sentences.
                                Write this To the whole world. Still nah hypotheticaly scenario.
                                Bihar is the best state. Better than all of them. I am studying with
                                two idiots in RMIT building 8. </p>
                            <p className={styles.secondPara}>Just writing whatever I want to.
                                I didn't want to use Lrem Impusm cause it's for
                                losers. I don't get it why it's popular when you can
                                fill the paras with whatever you want. Just write anything and
                                no one will notice cause its filler content my mate.</p>
                        </div>
                        <div className={styles.imageContent}>
                            <img className={styles.expImage} src={papaPlaying} alt='sir playing image'></img>
                            <img className={`${styles.expImageRightTilt} ${styles.expImage}`} src={inspection} alt='science fair inspection'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}