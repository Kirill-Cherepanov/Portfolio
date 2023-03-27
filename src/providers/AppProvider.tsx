import { Suspense, ReactNode, StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Spinner } from '@/components';
import { ColorThemeProvider } from '@/providers';

const SuspenseFallback = (
  <div className="flex items-center justify-center w-screen h-screen">
    <Spinner />
  </div>
);

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <StrictMode>
      <Suspense fallback={SuspenseFallback}>
        <ColorThemeProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </ColorThemeProvider>
      </Suspense>
    </StrictMode>
  );
};
