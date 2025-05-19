import styles from '../css-components/SideBar.module.css';
import useCustomBUTTONCursorInDiv from '../customhooks/useCustomBUTTONCursorInDiv';
import useCustomCursorInDiv from '../customhooks/useCustomCursorInDiv';

export default function SideBar({ isMainContent, sideBarMode }) {
    const [aboutMeButton, aboutMeButtonCursor] = useCustomBUTTONCursorInDiv();
    const [parentDiv, customCursor] = useCustomCursorInDiv();
    const [qualButton, qualButtonCursor] = useCustomBUTTONCursorInDiv();
    const [workButton, workButtonCursor] = useCustomBUTTONCursorInDiv();

    const setCursorRefs = (el) => {
        customCursor.current = el;
        aboutMeButtonCursor.current = el;
        qualButtonCursor.current = el;
        workButtonCursor.current = el;
    }
    return (
        <div className={`global-SideBar homeComponent ${styles.sideBar} ${sideBarMode === 'dark-mode' ? styles.darkMode : ''}`}
        ref={parentDiv}>
            <div className={sideBarMode === 'dark-mode' ? styles.customCursor : ''} 
            ref={setCursorRefs}></div>
            <div className={styles.sideBarContentContainer}>
            <h3 className={styles.logoSideBar}>AK</h3>
            <a className={isMainContent === "about me" ?
                `${styles.fadeIn}` : ''} href='#about-id'
                ref={aboutMeButton}>About Me</a>
            <a className={isMainContent === "qualifications" ?
                `${styles.fadeIn}` : ''} href='#qualifications-id'
                ref={qualButton}>Qualifications</a>
            <a className={isMainContent === "work" ?
                `${styles.fadeIn}` : ''} href='#work-id'
                ref={workButton}>My Work</a>
            </div>
        </div>
    )
}