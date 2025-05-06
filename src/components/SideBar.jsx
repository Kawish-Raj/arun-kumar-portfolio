import styles from '../css-components/SideBar.module.css';

export default function SideBar({isMainContent}){
    return(
        <div className={`global-SideBar homeComponent ${styles.sideBar}`}>
            <h3>Side-Bar</h3>
            <ul>
                <li className={isMainContent === "about me" ? 
                    `${styles.fadeIn}`: ''}><a href='#about-id'>About Me</a></li>
                <li className={isMainContent === "qualifications" ?
                     `${styles.fadeIn}`: ''}><a href='#qualifications-id'>Qualifications</a></li>
                <li className={isMainContent === "work" ? 
                    `${styles.fadeIn}`: ''}><a href='#work-id'>Work and Experiences</a></li>
            </ul>
        </div>
    )
}