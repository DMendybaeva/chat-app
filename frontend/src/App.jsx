import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { useState, useMemo } from 'react';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import AuthContext from './contexts/index';
import useAuth from './hooks/index';

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const logIn = () => setLoggedIn(true);
  const logOut = () => {
    localStorage.removeItem('userId');
    setLoggedIn(false);
  };

  const authInfo = useMemo(() => ({ loggedIn, logIn, logOut }), [loggedIn]);

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  return auth.loggedIn ? children : <Navigate to="/login" />;
};

const AuthButton = () => {
  const auth = useAuth();

  return auth.loggedIn ? (
    <button type="button" onClick={auth.logOut}>
      Log out
    </button>
  ) : (
    <button type="button" to="/login">
      Log in
    </button>
  );
};

const App = () => (
  <AuthProvider>
    <AuthButton />
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  </AuthProvider>
);

export default App;
