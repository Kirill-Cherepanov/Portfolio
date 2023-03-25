import { useContext, useEffect, useRef } from 'react';

import { OscillatingLinesContext } from '@/providers';
import { useResizeObserver } from '@/hooks';
import { getElementPosition } from '@/utility';

type OscillatingLineProps = { className?: string };

// Color is the same for every line and is set in VARS in OscilatingLinesCanvas

export function OscillatingLine({ className }: OscillatingLineProps) {
  const [_, setLines] = useContext(OscillatingLinesContext);
  const lineRef = useRef<HTMLDivElement>(null!);
  const pageSize = useResizeObserver();

  useEffect(() => {
    const line = lineRef.current;

    const lineData = {
      ...getElementPosition(line),
      width: line.getBoundingClientRect().height,
      length: line.getBoundingClientRect().width,
    };

    setLines((lines) => [...lines, lineData]);

    return () => setLines((lines) => lines.filter((line) => line !== lineData));
  }, [pageSize.w, pageSize.h]);

  return <div ref={lineRef} className={className || 'w-full h-0.5 opacity-0'} />;
}
