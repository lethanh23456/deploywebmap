import '@mantine/core/styles.css';
import { RouterProvider } from '@tanstack/react-router';
import { router } from '@/app/routes/routes';
import AppProvider from '@/app/providers/AppProvider';

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  )
}

export default App
