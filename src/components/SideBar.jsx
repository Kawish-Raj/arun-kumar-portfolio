import styles from '../css-components/SideBar.module.css';
import useCustomBUTTONCursorInDiv from '../customhooks/useCustomBUTTONCursorInDiv';

export default function SideBar({ isMainContent, sideBarMode }) {
    const [aboutMeButton, customCursor] = useCustomBUTTONCursorInDiv();
    return (
        <>
        <div className={sideBarMode === 'dark-mode' ? styles.customCursor : ''}></div>
        <div className={`global-SideBar homeComponent ${styles.sideBar} ${sideBarMode === 'dark-mode' ? styles.darkMode : ''}`}>
            <div className={styles.sideBarContentContainer}>
            <h3 className={styles.logoSideBar}>AK</h3>
            <a className={isMainContent === "about me" ?
                `${styles.fadeIn}` : ''} href='#about-id'
                ref={aboutMeButton}>About Me</a>
            <a className={isMainContent === "qualifications" ?
                `${styles.fadeIn}` : ''} href='#qualifications-id'>Qualifications</a>
            <a className={isMainContent === "work" ?
                `${styles.fadeIn}` : ''} href='#work-id'>My Work</a>
            </div>
        </div>
        </>
    )
}