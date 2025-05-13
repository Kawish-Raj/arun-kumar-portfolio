import styles from '../css-components/AboutMe.module.css';
import useTopDistanceTrigger from '../customhooks/useTopDistanceTrigger';
import { useEffect, useRef } from 'react';
import useSideBarEnterTrigger from '../customhooks/useSideBarEnterTrigger';
import useCustomCursorInDiv from '../customhooks/useCustomCursorInDiv';
import useCustomTEXTCursorInDiv from '../customhooks/useCustomTEXTCursorInDiv';

export default function AboutMe({ setIsMainContent, setSideBarMode, isMainContent }) {
    const hiContent = useRef();
    
    const divRef1 = useTopDistanceTrigger(setIsMainContent, 0);
    const divRef2 = useSideBarEnterTrigger(setSideBarMode, 60);

    const [parentDiv, customCursor] = useCustomCursorInDiv();

    const [hiDiv, hiCustomTextCursor] = useCustomTEXTCursorInDiv();
    const [imDiv, imCustomTextCursor] = useCustomTEXTCursorInDiv();
    const [nameDiv, nameCustomTextCursor] = useCustomTEXTCursorInDiv();
    const [para1, para1CustomTextCursor] = useCustomTEXTCursorInDiv();
    const [para2, para2CustomTextCursor] = useCustomTEXTCursorInDiv();


    const setCursorRefs = (el) => {
        customCursor.current = el;
        hiCustomTextCursor.current = el;
        imCustomTextCursor.current = el;
        nameCustomTextCursor.current = el;
        para1CustomTextCursor.current = el;
        para2CustomTextCursor.current = el;
    }

    const setHiRefs = (el) => {
        hiDiv.current = el;
        hiContent.current = el;
    }


    const setRefs = (el) => {
        divRef1.current = el;
        divRef2.current = el;
        parentDiv.current = el;
    };


    useEffect(() => {
        const hiTextContent = ['hi.', 'नमस्ते', 'bonjour.'];
        let i = 1;
        const intervalId = setInterval(()=> {
            hiContent.current.textContent = hiTextContent[i];
            if(i>=2){
                i = 0;
            } else {
                i++;
            }
        },4000);

        return(() => {
            clearInterval(intervalId);
        });
    },[])
    return (
        <div id="about-id" ref={setRefs} className={`global-AboutMe ${styles.aboutMe}`}>
            <div className={styles.customCursor} ref={setCursorRefs}></div>
            <div className={`${styles.aboutMeCanvas}`}>
                <div className={`${styles.headingContainer}`}>
                    <div className={`${styles.headingWord} ${styles.hiheadingword}`} ><span ref={setHiRefs}>hi.</span></div>
                    <div className={styles.headingWord}><span ref={imDiv}>i'm</span></div>
                    <div className={styles.headingWord}><span ref={nameDiv}>arun kumar.</span></div>
                </div>
                <div className={styles.aboutmePara}>
                    <p ref={para1}>I began my journey in education as a simple school teacher,
                        and over the years, I have remained deeply committed to this
                        field. I have always believed that education is one of the
                        most powerful tools for positive change, not just for
                        individuals, but for society as a whole.
                    </p>
                    <p ref={para2}>
                        Throughout my career, I’ve been fortunate to be involved in
                        establishing and managing educational institutions across
                        Bihar and Jharkhand. My focus has consistently been on
                        improving the quality of education at both school and college
                        levels. I try to personally stay involved in the functioning of
                        these institutions to ensure that students and teachers have the
                        right environment to grow.
                    </p>
                </div>
            </div>
        </div>
    )
}