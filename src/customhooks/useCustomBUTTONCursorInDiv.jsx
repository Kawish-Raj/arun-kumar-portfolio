import { useEffect, useRef } from "react";

function useCustomBUTTONCursorInDiv() {
    const parentDiv = useRef(null);
    const customTextCursor = useRef(null);

    function getDirection(e, el) {
        const { top, left, width, height } = el.getBoundingClientRect();
        const x = e.clientX - left - width / 2;
        const y = e.clientY - top - height / 2;
        const angle = Math.atan2(y, x) * (180 / Math.PI);
        const direction = Math.round((angle + 180) / 90) % 4;

        return ['left', 'top', 'right', 'bottom'][direction];
    }

    useEffect(() => {
        const handleEnterDiv = (e) => {
            const direction = getDirection(e, parentDiv.current);
            parentDiv.current.setAttribute('data-direction', direction);
            if (customTextCursor.current) {
                Object.assign(customTextCursor.current.style, {
                    opacity: '0%'
                });
                Object.assign(parentDiv.current.style, {
                    borderColor: "transparent"
                })
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

    return [parentDiv, customTextCursor];
}

export default useCustomBUTTONCursorInDiv;