import styles from '../css-components/Qualifications.module.css';
import useVisibleTrigger from '../customhooks/useVisibleTrigger';
import useTopDistanceTrigger from '../customhooks/useTopDistanceTrigger';
export default function Qualifications({setIsVisible}){
    // const divRef = useVisibleTrigger(setIsVisible,0.8)
    const divRef = useTopDistanceTrigger(setIsVisible);
    return(
        <div ref={divRef} className={`global-Qualifications homeComponent ${styles.qualifications}`}>
            <h1>Qualifications</h1>
        </div>
    )
}