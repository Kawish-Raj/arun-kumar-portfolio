import styles from '../css-components/Work.module.css';
import useTopDistanceTrigger from '../customhooks/useTopDistanceTrigger';

export default function Work({ setIsMainContent }) {
    const divRef = useTopDistanceTrigger(setIsMainContent, 2);
    return (
        <div ref={divRef} id="work-id" className={`global-Work ${styles.work}`}>
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