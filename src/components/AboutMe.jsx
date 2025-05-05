import styles from '../css-components/AboutMe.module.css';

export default function AboutMe(){
    return(
        <div className={`global-AboutMe homeComponent ${styles.aboutMe}`}>
            <h1>About Me</h1>
        </div>
    )
}