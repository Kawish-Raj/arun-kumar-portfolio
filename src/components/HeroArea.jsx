import styles from '../css-components/HeroArea.module.css';
import demoPerson from '../assets/demo-person.png'

export default function HeroArea() {
    return (
        <div className={`global-HeroArea homeComponent ${styles.heroArea}`}>
            {/* <div className={`${styles.introGridContainer}`}>
                <div className={styles.empty}></div>
                <h1 className={styles.hi}>hi!</h1>
                <h1 className={styles.im}>i'm</h1>
                <h1 className={styles.firstName}>Arun</h1>
                <h1 className={styles.secondName}>Kumar</h1>
            </div> */}
        </div>
    )
}