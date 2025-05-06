import styles from '../css-components/Work.module.css';
import useTopDistanceTrigger from '../customhooks/useTopDistanceTrigger';

export default function Work({setIsMainContent}){
    const divRef = useTopDistanceTrigger(setIsMainContent, 2);
    return(
        <div ref={divRef} className={`global-Work homeComponent ${styles.work}`}>
            <h1>Work and Experiences</h1>
        </div>
    )
}