import { useEffect, useRef } from "react";

function useCustomBUTTONCursorInDiv(){
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
                const parentStyles = window.getComputedStyle(parentDiv.current);
                Object.assign(customTextCursor.current.style, {
                    opacity: '0%'
                });
                Object.assign(parentDiv.current.style, {
                    // backgroundColor: "rgba(255, 0, 0, 0.5)",
                    // backgroundOpacity: "50%",
                    borderColor: "transparent"
                } )
            }
        };

        const handleLeaveDiv = () => {
            if (customTextCursor.current) {
                Object.assign(customTextCursor.current.style, {
                    opacity: '50%'
                });

                Object.assign(parentDiv.current.style, {
                    backgroundColor: "transparent",
                    backgroundOpacity: "50%",
                    borderColor: "white"
                })
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

export default useCustomBUTTONCursorInDiv;