import styles from '../css-components/HeroArea.module.css';
import demoPerson from '../assets/demo-person.png'
import { useRef,useEffect } from 'react';

export default function HeroArea() {
    const ref = useRef(null);
    useEffect(() => {
        const handleScrolling = () => {
          const scrollY = window.scrollY;
    
          if (ref.current) {
            ref.current.style.transform = `translateY(-${scrollY * 0.7}px)`; 
            // adjust multiplier (e.g., 0.3, 0.7) for effect strength
          }
        };
    
        window.addEventListener('scroll', handleScrolling);
    
        // Cleanup on unmount
        return () => {
          window.removeEventListener('scroll', handleScrolling);
        };
      }, []);

    return (
        <div className={`global-HeroArea homeComponent ${styles.heroArea}`}>
            <div className={styles.tagLineContainer}>
                <div ref={ref}>B</div>
                <div>uilding </div>
                <div>Tomorrow's </div>
                <div>Schools </div>
                <div>Today</div>
            </div>




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