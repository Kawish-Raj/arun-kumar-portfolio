import { forwardRef } from 'react';

const ScrollLetter = forwardRef(({ letter }, ref) => {
  return (
    <div ref={ref} style={{ transition: 'transform 0.3s ease-out' }}>
      {letter}
    </div>
  );
});

export default ScrollLetter;
