import { useEffect, useState } from 'react';

export function useMousePosition() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePos = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX + window.scrollX,
        y: e.clientY + window.scrollY,
      });
    };
    document.addEventListener('pointermove', updateMousePos);
    return () => document.removeEventListener('pointermove', updateMousePos);
  }, []);

  return mousePos;
}
