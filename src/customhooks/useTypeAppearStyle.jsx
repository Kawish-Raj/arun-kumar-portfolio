import { useEffect, useRef } from "react";

function useTypeAppearStyle(wordArray, animStartRatio = 0.4, animEndRatio = 0.25, wordOpacity = 0.5 ) {

    const scrollRef = useRef();
    const styleRef = useRef();


    useEffect(() => {
            const viewportHeight = window.innerHeight;
            let hasPassedTOPMark = false;
            let hasPassedBOTTOMMark = true;
            let currLetterIndex = 0;
            let topCrossingRatio = animStartRatio;
            let bottomCrossingRatio = animStartRatio;
            const ratioReduceVal = ((animStartRatio - animEndRatio)/(wordArray.length - 1));
            const opacityIncreaseVal = ((1-wordOpacity)/(wordArray.length - 1));
            
            if (styleRef.current) {
                styleRef.current.style.opacity = `${wordOpacity}%`;
            }    
    
            function handleScroll() {
                if (scrollRef.current) {
                    const { top } = scrollRef.current.getBoundingClientRect();
                    const crossingTOPMark = top < (topCrossingRatio * viewportHeight);
                    const crossingBOTTOMMark = top > (bottomCrossingRatio * viewportHeight);
    
    
                    if (!hasPassedTOPMark && crossingTOPMark) {
                        if (styleRef.current) {
                            if (currLetterIndex === 0) {
                                styleRef.current.textContent += wordArray[currLetterIndex];
                                topCrossingRatio -= ratioReduceVal;
                                currLetterIndex++;
                                hasPassedBOTTOMMark = false;
                            }
                            else if (currLetterIndex === (wordArray.length -1)) {
                                wordOpacity = wordOpacity + opacityIncreaseVal;
                                styleRef.current.style.opacity = wordOpacity;
                                styleRef.current.textContent += wordArray[currLetterIndex];
                                bottomCrossingRatio -= ratioReduceVal;
                                currLetterIndex++;
                                hasPassedTOPMark = true;
                            }
                            else if (currLetterIndex < wordArray.length) {
                                wordOpacity = wordOpacity + opacityIncreaseVal;
                                styleRef.current.style.opacity = wordOpacity;
                                styleRef.current.textContent += wordArray[currLetterIndex];
                                topCrossingRatio -= ratioReduceVal;
                                bottomCrossingRatio -= ratioReduceVal;
                                currLetterIndex++;
                            }
                        }
                    }
    
                    if (!hasPassedBOTTOMMark && crossingBOTTOMMark) {
                        if (styleRef.current) {
                            if (currLetterIndex === wordArray.length) {
                                wordOpacity = wordOpacity - opacityIncreaseVal;
                                styleRef.current.style.opacity = wordOpacity;
                                styleRef.current.textContent = styleRef.current.textContent.slice(0, -1);
                                bottomCrossingRatio += ratioReduceVal;
                                currLetterIndex--;
                                hasPassedTOPMark = false;
                            }
                            else if (currLetterIndex === 1) {
                                styleRef.current.textContent = styleRef.current.textContent.slice(0, -1);
                                topCrossingRatio += ratioReduceVal;
                                currLetterIndex--;
                                hasPassedBOTTOMMark = true;
                            }
                            else if (currLetterIndex > 0) {
                                wordOpacity = wordOpacity - opacityIncreaseVal;
                                styleRef.current.style.opacity = wordOpacity;
                                styleRef.current.textContent = styleRef.current.textContent.slice(0, -1);
                                topCrossingRatio += ratioReduceVal;
                                bottomCrossingRatio += ratioReduceVal;
                                currLetterIndex--;
                            }
                        }
                    }
                }
            }
    
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

        return [scrollRef, styleRef];
}

export default useTypeAppearStyle;