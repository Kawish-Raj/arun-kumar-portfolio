import styles from '../css-components/AboutMe.module.css';
import useTopDistanceTrigger from '../customhooks/useTopDistanceTrigger';

export default function AboutMe({setIsMainContent}){
    const divRef = useTopDistanceTrigger(setIsMainContent, 0);
    return(
        <div ref={divRef} className={`global-AboutMe homeComponent ${styles.aboutMe}`}>
            <h1>About Me</h1>
        </div>
    )
}