import { useEffect, useRef } from "react";

function useSideBarEnterTrigger(callBack, decidingTopDis = 80, enterVal = 'dark-mode', exitVal = 'light-mode') {
    const ref = useRef(null);
    const prevDistanceFromTop = useRef(150);
    const prevBottomDistFromTop = useRef(window.innerHeight);

    useEffect(() => {
            function handleScroll() {
                if (!ref.current) return;
    
                const rect = ref.current.getBoundingClientRect();
                const currDistanceFromTop = rect.top;
                const currBottomDistFromTop = rect.bottom;
    
                if ((prevDistanceFromTop.current > decidingTopDis && currDistanceFromTop < decidingTopDis) ||
                    (prevBottomDistFromTop.current < decidingTopDis && currBottomDistFromTop > decidingTopDis)) {
                    callBack(enterVal);
                } else if ((prevDistanceFromTop.current < decidingTopDis && currDistanceFromTop > decidingTopDis) ||
                    (prevBottomDistFromTop.current > decidingTopDis && currBottomDistFromTop < decidingTopDis)) {
                    callBack(exitVal);
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
    
    return ref;

}

export default useSideBarEnterTrigger;