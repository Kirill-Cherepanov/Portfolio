import { AppProvider } from '@/providers';
import { AppRoutes } from '@/routes';

export function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}
