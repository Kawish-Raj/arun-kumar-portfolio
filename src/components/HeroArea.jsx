import styles from '../css-components/HeroArea.module.css';

export default function HeroArea() {
    return (
        <div className={`global-HeroArea homeComponent ${styles.heroArea}`}>
            <div className={`${styles.messageContainer}`}>
                <h1 className={styles.hi}>hi!</h1>
                <h1>i'm</h1>
                <h1><span className={styles.firstName}>Arun</span>
                <span className={styles.secondName}>Kumar</span></h1>
            </div>
        </div>
    )
}