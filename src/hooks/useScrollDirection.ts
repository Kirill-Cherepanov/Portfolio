import { useEffect, useRef, useState } from 'react';

export function useScrollDirection(onChangeDirection?: (direction: number) => unknown) {
  const prevScroll = useRef(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const checkDir = () => {
      const direction = Math.sign(window.scrollY - prevScroll.current);
      setDirection(direction);
      prevScroll.current = window.scrollY;
      if (onChangeDirection) onChangeDirection(direction);
    };
    window.addEventListener('scroll', checkDir, { passive: true });

    return () => window.removeEventListener('scroll', checkDir);
  }, []);

  return direction;
}
