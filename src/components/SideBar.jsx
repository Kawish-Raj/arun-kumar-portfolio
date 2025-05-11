import styles from '../css-components/SideBar.module.css';

export default function SideBar({ isMainContent, sideBarMode }) {
    if(sideBarMode === 'dark-mode'){
    }
    return (
        <div className={`global-SideBar homeComponent ${styles.sideBar} ${sideBarMode === 'dark-mode' ? styles.darkMode : ''}`}>
            <div className={styles.sideBarContentContainer}>
            <h3 className={styles.logoSideBar}>AK</h3>
            <a className={isMainContent === "about me" ?
                `${styles.fadeIn}` : ''} href='#about-id'>About Me</a>
            <a className={isMainContent === "qualifications" ?
                `${styles.fadeIn}` : ''} href='#qualifications-id'>Qualifications</a>
            <a className={isMainContent === "work" ?
                `${styles.fadeIn}` : ''} href='#work-id'>My Work</a>
            </div>
        </div>
    )
}