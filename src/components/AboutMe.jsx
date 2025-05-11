import styles from '../css-components/AboutMe.module.css';
import useTopDistanceTrigger from '../customhooks/useTopDistanceTrigger';
import { useEffect, useRef } from 'react';

export default function AboutMe({ setIsMainContent, setSideBarMode }) {
    const divRef1 = useTopDistanceTrigger(setIsMainContent, 0);
    const divRef2 = useRef();
    const decidingTopDis = 80;
    const prevDistanceFromTop = useRef(150);
    const prevBottomDistFromTop = useRef((window.innerHeight));

    useEffect(() => {
        function handleScroll() {
            if (!divRef2.current) return;

            const rect = divRef2.current.getBoundingClientRect();
            const currDistanceFromTop = rect.top;
            const currBottomDistFromTop = rect.bottom;

            if ((prevDistanceFromTop.current > decidingTopDis && currDistanceFromTop < decidingTopDis) ||
                (prevBottomDistFromTop.current < decidingTopDis && currBottomDistFromTop > decidingTopDis)) {
                setSideBarMode('dark-mode');
            } else if ((prevDistanceFromTop.current < decidingTopDis && currDistanceFromTop > decidingTopDis) ||
                (prevBottomDistFromTop.current > decidingTopDis && currBottomDistFromTop < decidingTopDis)) {
                setSideBarMode('light-mode');
            }

            prevDistanceFromTop.current = currDistanceFromTop;
            prevBottomDistFromTop.current = currBottomDistFromTop;
        }

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);
    const setRefs = (el) => {
        divRef1.current = el;
        divRef2.current = el;
    };
    return (
        <div id="about-id" ref={setRefs} className={`global-AboutMe homeComponent ${styles.aboutMe}`}>
            <h1>About Me</h1>
        </div>
    )
}