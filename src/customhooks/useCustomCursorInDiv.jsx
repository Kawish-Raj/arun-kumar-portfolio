import { useRef, useEffect } from "react";

function useCustomCursorInDiv() {
    const parentDiv = useRef(null);
    const customCursor = useRef(null);

    useEffect(() => {
        const positionElement = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            if (customCursor.current) {
                customCursor.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            }
        };

        const handleEnterDiv = () => {
            if (customCursor.current) {
                customCursor.current.style.opacity = 0.5;
            }
            console.log("enter worked");
        };

        const handleLeaveDiv = () => {
            if (customCursor.current) {
                customCursor.current.style.opacity = 0;
            }
            console.log("leave worked");
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

    return { parentDiv, customCursor };
}

export default useCustomCursorInDiv;
