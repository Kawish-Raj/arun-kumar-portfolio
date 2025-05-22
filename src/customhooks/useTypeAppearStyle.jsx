import { useEffect, useRef } from "react";

function useTypeAppearStyle() {

    const scrollRef = useRef();
    const styleRef = useRef();


    useEffect(() => {
            const viewportHeight = window.innerHeight;
            let hasPassedTOPMark = false;
            let hasPassedBOTTOMMark = true;
            let currLetterIndex = 0;
            let topCrossingRatio = 0.4;
            let bottomCrossingRatio = 0.4;
            const ratioReduceVal = 0.019
            const headingWord = ['Q', 'u', 'a', 'l', 'i', 'f', 'i', 'c', 'a', 't', 'i', 'o', 'n', 's'];
    
    
            function handleScroll() {
                if (scrollRef.current) {
                    const { top } = scrollRef.current.getBoundingClientRect();
                    const crossingTOPMark = top < (topCrossingRatio * viewportHeight);
                    const crossingBOTTOMMark = top > (bottomCrossingRatio * viewportHeight);
    
    
                    if (!hasPassedTOPMark && crossingTOPMark) {
                        console.log(`Start Top Mark ${(topCrossingRatio * viewportHeight)}`);
                        console.log(`Crossing Top Bottom Makr ${(bottomCrossingRatio * viewportHeight)}`);
                        if (styleRef.current) {
                            if (currLetterIndex === 0) {
                                styleRef.current.textContent += headingWord[currLetterIndex];
                                topCrossingRatio -= ratioReduceVal;
                                currLetterIndex++;
                                hasPassedBOTTOMMark = false;
                            }
                            else if (currLetterIndex === 13) {
                                styleRef.current.textContent += headingWord[currLetterIndex];
                                bottomCrossingRatio -= ratioReduceVal;
                                currLetterIndex++;
                                hasPassedTOPMark = true;
                            }
                            else if (currLetterIndex < headingWord.length) {
                                styleRef.current.textContent += headingWord[currLetterIndex];
                                topCrossingRatio -= ratioReduceVal;
                                bottomCrossingRatio -= ratioReduceVal;
                                currLetterIndex++;
                            }
                        }
                    }
    
                    if (!hasPassedBOTTOMMark && crossingBOTTOMMark) {
                        if (styleRef.current) {
                            if (currLetterIndex === 14) {
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