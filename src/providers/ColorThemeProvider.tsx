import { createContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

const defaultTheme = (localStorage.getItem('color-theme') as Theme) || 'dark';
localStorage.setItem('color-theme', defaultTheme);

export const ColorThemeContext = createContext<[Theme, () => void]>([defaultTheme, () => {}]);

type ColorThemeProviderProps = { children: JSX.Element };

export function ColorThemeProvider({ children }: ColorThemeProviderProps) {
  const [theme, setTheme] = useState(defaultTheme);
  const toggleTheme = () => {
    setTheme((theme) => {
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('color-theme', newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    return () => document.documentElement.classList.remove('light', 'dark');
  }, [theme]);

  return (
    <ColorThemeContext.Provider value={[theme, toggleTheme]}>{children}</ColorThemeContext.Provider>
  );
}
