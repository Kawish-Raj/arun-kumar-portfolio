import styles from '../css-components/Work.module.css';
import useTopDistanceTrigger from '../customhooks/useTopDistanceTrigger';
import { useRef, useEffect } from 'react';

export default function Work({ setIsMainContent }) {

    const workComponentRef = useRef(null);

    const setRefs = (el) => {
        divRef.current = el;
        workComponentRef.current = el;
    }

    const divRef = useTopDistanceTrigger(setIsMainContent, 2);

    useEffect(() => {
        const workComponent = workComponentRef.current;
        const halfTransparentEl = workComponent.querySelector(`.${styles.halfTransparent}`);

        function handleScroll() {
            const scrollY = window.scrollY;
            const offsetTop = workComponent.offsetTop;
            const pinStart = offsetTop;
            const pinEnd = offsetTop + workComponent.getBoundingClientRect().height;

            if (scrollY >= pinStart && scrollY <= pinEnd) {
                const percentage = (100 - ((scrollY - pinStart) / window.innerHeight) * 100);

                const clamped = Math.max(0, Math.min(percentage, 100)); // keep between 0–100

                halfTransparentEl.style.maskImage = `radial-gradient(circle, black ${clamped}%, transparent ${clamped}%)`;
                halfTransparentEl.style.webkitMaskImage = `radial-gradient(circle, black ${clamped}%, transparent ${clamped}%)`;
            }
            else if(scrollY < pinStart) {
                halfTransparentEl.style.maskImage = `radial-gradient(circle, black 100%, transparent 100%)`;
                halfTransparentEl.style.webkitMaskImage = `radial-gradient(circle, black 100%, transparent 100%)`;
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
                <div className={styles.halfTransparent}>
                    <h1>Ibrahim</h1>
                </div>
                <div className={styles.theOneBellow}>
                    <h1>Ginger Nigger</h1>
                </div>
            </div>
        </div>

    )
}