import { useRef, useEffect } from "react";

function useCustomCursorInDiv() {
    const parentDiv = useRef(null);
    const customCursor = useRef(null);

    useEffect(() => {
        const positionElement = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            if (customCursor.current) {
                const rect = customCursor.current.getBoundingClientRect();
                const cursorWidth = rect.width;
                const cursorHeight = rect.height;
                customCursor.current.style.transform = `translate3d(${mouseX - cursorWidth / 2}px, ${mouseY - cursorHeight / 2}px, 0)`;
            }
        };


        const handleEnterDiv = () => {
            if (customCursor.current) {
                customCursor.current.style.opacity = 0.5;
                window.addEventListener("mousemove", positionElement);
            }
        };

        const handleLeaveDiv = () => {
            if (customCursor.current) {
                customCursor.current.style.opacity = 0;
                window.removeEventListener("mousemove", positionElement);
            }
        };


        const parent = parentDiv.current;
        if (parent) {
            parent.addEventListener("mouseenter", handleEnterDiv);
            parent.addEventListener("mouseleave", handleLeaveDiv);
        }

        return () => {
            if (parent) {
                parent.removeEventListener("mouseenter", handleEnterDiv);
                parent.removeEventListener("mouseleave", handleLeaveDiv);
            }
        };
    }, []);

    return [parentDiv, customCursor];
}

export default useCustomCursorInDiv;
