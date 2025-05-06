import { useEffect, useRef } from 'react';

function useTopDistanceTrigger(callback, index , distanceRatio = 0.3) {
  const ref = useRef(null);
  const prevDistanceRatio = useRef(1);
  const sideBarVals = ["about me", "qualifications", "work"]

  useEffect(() => {
    function handleScroll() {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const currDistanceRatio = rect.top / viewportHeight;

      if (prevDistanceRatio.current >= distanceRatio && currDistanceRatio <= distanceRatio) {
        callback(sideBarVals[index]);
      } else if (prevDistanceRatio.current <= distanceRatio && currDistanceRatio >= distanceRatio) {
        index === 0 ? callback(null) : callback(sideBarVals[index-1]);
      }
      prevDistanceRatio.current = currDistanceRatio;
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // optional but helps for dynamic resizes
    handleScroll(); // run once initially

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [distanceRatio, callback]);

  return ref;
}

export default useTopDistanceTrigger;

// ######## BELOW IS THE CODE TO DO THE SAME AS ABOVE BUT WITH 
// ######## USING IntersectionObserver Instead of window.addEventListern('scroll')
// ######## Both are roughly the same amount of efficient. 

// function useTopDistanceTrigger(callback, index, distanceRatio = 0.3) {
//     const ref = useRef(null);
//     const sideBarVals = ["about me", "qualifications", "work"];
//     const triggered = useRef(false); // avoid repeated calls
  
//     useEffect(() => {
//       if (!ref.current) return;
  
//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           const viewportHeight = window.innerHeight;
//           const rect = entry.boundingClientRect;
//           const currDistanceRatio = rect.top / viewportHeight;

//           console.log("called handle function")
  
//           // Trigger only when crossing the threshold
//           if (!triggered.current && currDistanceRatio <= distanceRatio) {
//             triggered.current = true;
//             callback(sideBarVals[index]);
//           } else if (triggered.current && currDistanceRatio > distanceRatio) {
//             triggered.current = false;
//             callback(index === 0 ? sideBarVals[0] : sideBarVals[index - 1]);          }
//         },
//         {
//           threshold: Array.from({ length: 101 }, (_, i) => i / 100), // fine-grained detection
//         }
//       );
  
//       observer.observe(ref.current);
  
//       return () => {
//         if (ref.current) observer.unobserve(ref.current);
//       };
//     }, [callback, distanceRatio, index]);
  
//     return ref;
//   }

//   export default useTopDistanceTrigger;
  