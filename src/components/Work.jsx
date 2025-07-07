import styles from '../css-components/Work.module.css';
import useTopDistanceTrigger from '../customhooks/useTopDistanceTrigger';
import { useRef,useEffect } from 'react';

export default function Work({ setIsMainContent }) {
    
    const workComponentRef = useRef(null);

    const setRefs = (el) => {
        divRef.current = el;
        workComponentRef.current =el;
    }
    
    const divRef = useTopDistanceTrigger(setIsMainContent, 2);

    useEffect(() => {
        const workComponent = workComponentRef.current;

        function handleScroll() {
            const scrollY = window.scrollY;
            const offsetTop = workComponent.offsetTop;
            const pinStart = offsetTop;
            const pinEnd = offsetTop + workComponent.getBoundingClientRect().height;
        
            if((scrollY >= pinStart && scrollY <= pinEnd)){
            console.log("scroll detection works inside the box");
        }
        }

        window.addEventListener('scroll',handleScroll, { passive: false});

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div ref={setRefs} id="work-id" className={`global-Work ${styles.work}`}>
            {/* <h1>Work and Experiences</h1> */}
            <div className={styles.stickyWorkContainer}>
                <div className={styles.halfTransparent}>
                    Your content here
                </div>
                <div className={styles.theOneBellow}>
                    I don't know what to write here.
                </div>
            </div>
        </div>

    )
}