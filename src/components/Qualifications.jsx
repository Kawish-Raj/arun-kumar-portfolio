import styles from '../css-components/Qualifications.module.css';
import useTopDistanceTrigger from '../customhooks/useTopDistanceTrigger';
export default function Qualifications({setIsMainContent}){
    const divRef = useTopDistanceTrigger(setIsMainContent, 1);
    return(
        <div ref={divRef} id="qualifications-id" className={`global-Qualifications homeComponent ${styles.qualifications}`}>
            <h1>Qualifications</h1>
        </div>
    )
}