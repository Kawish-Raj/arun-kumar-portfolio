import styles from '../css-components/SideBar.module.css';

export default function SideBar({isMainContent}){
    return(
        <div className={`global-SideBar homeComponent ${styles.sideBar}`}>
            <h3>AK</h3>
            <ul>
                <li className={isMainContent === "about me" ? 
                    `${styles.fadeIn}`: ''}><a href='#about-id'>About Me</a>
                    <div className={`${styles.underline} ${isMainContent === "about me" ? styles.fillUp : ''}`}></div></li>
                <li className={isMainContent === "qualifications" ?
                     `${styles.fadeIn}`: ''}><a href='#qualifications-id'>Qualifications</a>
                     <div className={`${styles.underline} ${isMainContent === "qualifications" ? styles.fillUp : ''}`}></div></li>
                <li className={isMainContent === "work" ? 
                    `${styles.fadeIn}`: ''}><a href='#work-id'>Work and Experiences</a>
                    <div className={`${styles.underline} ${isMainContent=== "work" ? styles.fillUp : ''}`}></div></li>
            </ul>
        </div>
    )
}