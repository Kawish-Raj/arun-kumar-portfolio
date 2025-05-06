import styles from '../css-components/SideBar.module.css';

export default function SideBar({isVisible}){
    if(isVisible){
        console.log(isVisible);
    }
    return(
        <div className={`global-SideBar homeComponent ${styles.sideBar}`}>
            <h3>Side-Bar</h3>
            <ul>
                <li>About Me</li>
                <li className={isVisible ? `${styles.fadeIn}`: ''}>Qualifications</li>
                <li>Work and Experiences</li>
            </ul>
        </div>
    )
}