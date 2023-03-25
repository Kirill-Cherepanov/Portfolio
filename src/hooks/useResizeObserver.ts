import { useEffect, useState } from 'react';

// Page observer by default (element == undefined)
export function useResizeObserver<T extends Element>(element?: T | null) {
  const [elementSize, setElementSize] = useState({
    w: document.documentElement.scrollWidth,
    h: document.documentElement.scrollHeight,
  });

  useEffect(() => {
    const target = element || document.body;
    const updateSize = (el: Element) => setElementSize({ w: el.scrollWidth, h: el.scrollHeight });
    const resizeObserver = new ResizeObserver((entries) => updateSize(entries[0].target));
    resizeObserver.observe(target);
    updateSize(target);

    return () => resizeObserver.disconnect();
  }, [element]);

  return elementSize;
}
