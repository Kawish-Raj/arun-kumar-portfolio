import styles from '../css-components/SideBar.module.css';

export default function SideBar({isMainContent}){
    return(
        <div className={`global-SideBar homeComponent ${styles.sideBar}`}>
            <h3>Side-Bar</h3>
            <ul>
                <li className={isMainContent === "about me" ? 
                    `${styles.fadeIn}`: ''}>About Me</li>
                <li className={isMainContent === "qualifications" ?
                     `${styles.fadeIn}`: ''}>Qualifications</li>
                <li className={isMainContent === "work" ? 
                    `${styles.fadeIn}`: ''}>Work and Experiences</li>
            </ul>
        </div>
    )
}