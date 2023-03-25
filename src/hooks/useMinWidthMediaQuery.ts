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

export const useMinWidthMediaQuery = (screen: keyof typeof SIZES) => {
  const query = `(min-width: ${SIZES[screen]})`;
  const checkMatch = () => window.matchMedia(query).matches;

  const [matches, setMatches] = useState(checkMatch());

  useEffect(() => {
    const listener = () => setMatches(checkMatch());

    listener();
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [screen]);

  return matches;
};
