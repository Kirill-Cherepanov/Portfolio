import { StrictMode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Navbar } from '@/components';
import { Landing, ProjectPage } from '@/routes';
import { ColorThemeProvider, OscillatingLinesProvider } from '@/providers';

export default function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <ColorThemeProvider>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Landing />
                </>
              }
            />
            <Route
              path="/project/:name"
              element={
                <OscillatingLinesProvider>
                  <ProjectPage />
                </OscillatingLinesProvider>
              }
            />
          </Routes>
        </ColorThemeProvider>
      </BrowserRouter>
    </StrictMode>
  );
}
