import { lazily } from 'react-lazily';
import { Outlet, useLocation } from 'react-router-dom';
import { Suspense, useLayoutEffect } from 'react';

import { Navbar, Spinner } from '@/components';
import { useRoutes } from 'react-router-dom';
import { OscillatingLinesProvider } from '@/providers';

const { Landing } = lazily(() => import('./Landing'));
const { ProjectPage } = lazily(() => import('./ProjectPage'));

export function AppRoutes() {
  const routes = [
    {
      element: <AppLayout />,
      children: [
        { path: '/project/:name', element: <ProjectPage /> },
        { path: '*', element: <Landing /> },
      ],
    },
  ];

  const element = useRoutes(routes);

  return <>{element}</>;
}

function AppLayout() {
  const { pathname } = useLocation();

  useLayoutEffect(() => window.scrollTo(0, 0), [pathname]);

  return (
    <>
      {pathname === '/' && <Navbar />}
      <Suspense
        fallback={
          <div className="h-screen w-screen flex items-center justify-center">
            <Spinner />
          </div>
        }
      >
        {pathname === '/' ? (
          <Outlet />
        ) : (
          <OscillatingLinesProvider>
            <Outlet />
          </OscillatingLinesProvider>
        )}
      </Suspense>
    </>
  );
}
