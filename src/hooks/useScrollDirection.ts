import { useEffect, useRef, useState } from 'react';

export function useScrollDirection() {
  const prevScroll = useRef(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const checkDir = () => {
      setDirection(Math.sign(window.scrollY - prevScroll.current));
      prevScroll.current = window.scrollY;
    };
    window.addEventListener('scroll', checkDir);

    return () => window.removeEventListener('scroll', checkDir);
  }, []);

  return direction;
}
