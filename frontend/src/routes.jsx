import { Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import SignupPage from './pages/SignupPage';
import { useAuth } from './providers/AuthProvider/index';
import { PATHS } from './const';

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
  { path: PATHS.signup, element: <SignupPage /> },
];
