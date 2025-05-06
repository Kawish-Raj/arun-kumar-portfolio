import styles from '../css-components/Qualifications.module.css';
import useVisibleTrigger from '../customhooks/useVisibleTrigger';

export default function Qualifications({setIsVisible}){
    const divRef = useVisibleTrigger(setIsVisible)
    return(
        <div ref={divRef} className={`global-Qualifications homeComponent ${styles.qualifications}`}>
            <h1>Qualifications</h1>
        </div>
    )
}