import { Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import { useAuth } from './providers/AuthProvider/index';

export const PATHS = {
  home: '/',
  login: '/login',
  notFound: '*',
};

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  return auth.loggedIn ? children : <Navigate to="/login" />;
};

export const routes = [
  { path: PATHS.login, element: <LoginPage /> },
  { path: PATHS.notFound, element: <NotFoundPage /> },
  {
    path: PATHS.home,
    element: (
      <PrivateRoute>
        <HomePage />
      </PrivateRoute>
    ),
  },
];
