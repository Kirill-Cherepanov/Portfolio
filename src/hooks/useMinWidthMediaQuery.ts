import { useEffect, useState } from 'react';

export const SIZES = {
  '2xs': '400px',
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1920px',
};

export const useMinWidthMediaQuery = (screenSize: keyof typeof SIZES) => {
  const query = `(min-width: ${SIZES[screenSize]})`;
  const [matches, setMatches] = useState(checkMatch(query));

  useEffect(() => {
    const listener = () => setMatches(checkMatch(query));

    listener();
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [screenSize]);

  return matches;
};

const checkMatch = (query: string) => window.matchMedia(query).matches;
