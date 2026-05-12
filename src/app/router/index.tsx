import { ErrorPage } from '@/pages/error/ui/ErrorPage';
import { HelloPage } from '@/pages/hello/ui/HelloPage';
import { HomePage } from '@/pages/home/ui/HomePage';
import { LoginPage } from '@/pages/login/ui/LoginPage';
import { RegistrationPage } from '@/pages/registration/ui/RegistrationPage';
import { StartPage } from '@/pages/start/ui/StartPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <StartPage />,
    errorElement: <ErrorPage />
  },
  { path: '/home', element: <HomePage /> },
  { path: '/hello', element: <HelloPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/registration', element: <RegistrationPage /> }
]);
