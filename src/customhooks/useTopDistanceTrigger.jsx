import { useEffect, useRef } from 'react';

function useTopDistanceTrigger(callback, distanceRatio = 0.3) {
  const ref = useRef(null);

  useEffect(() => {
    function handleScroll() {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const coverage = rect.top / viewportHeight;

      if (coverage <= distanceRatio) {
        callback(true);
      } else {
        callback(false);
      }
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
