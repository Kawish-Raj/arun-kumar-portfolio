import { useRef, useEffect } from "react";

function useCustomTEXTCursorInDiv() {
    const parentDiv = useRef(null);
    const customTextCursor = useRef(null);

    useEffect(() => {
        const positionElement = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            if (customTextCursor.current) {
                customTextCursor.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            }
        };

        const handleEnterDiv = () => {
            if (customTextCursor.current) {
                const fontSize = parseFloat(window.getComputedStyle(parentDiv.current).fontSize);
                Object.assign(customTextCursor.current.style, {
                    borderRadius: '0%',
                    width: '0.2em',
                    height: `${1.4*fontSize}px`,
                    opacity: '100%'
                });
            }
        };

        const handleLeaveDiv = () => {
            if (customTextCursor.current) {
                Object.assign(customTextCursor.current.style, {
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    opacity: '50%'
                });
            }
        };

        window.addEventListener("mousemove", positionElement);

        const parent = parentDiv.current;
        if (parent) {
            parent.addEventListener("mouseenter", handleEnterDiv);
            parent.addEventListener("mouseleave", handleLeaveDiv);
        }

        return () => {
            window.removeEventListener("mousemove", positionElement);
            if (parent) {
                parent.removeEventListener("mouseenter", handleEnterDiv);
                parent.removeEventListener("mouseleave", handleLeaveDiv);
            }
        };
    }, []);

    return [parentDiv, customTextCursor];
}

export default useCustomTEXTCursorInDiv;
