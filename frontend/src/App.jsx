import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { useState, useMemo } from 'react';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import AuthContext from './contexts/index';
import useAuth from './hooks/index';

const AuthProvider = ({ children }) => {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem('user')),
  };

  const [loggedIn, setLoggedIn] = useState(initialState);
  const [username, setUsername] = useState({});

  const logIn = () => setLoggedIn(true);
  const logOut = () => {
    localStorage.removeItem('user');
    setLoggedIn(false);
  };

  const getUsername = (data) => {
    setUsername(data);
  };

  const authInfo = useMemo(() => ({ loggedIn, logIn, logOut, getUsername, username }), [loggedIn]);

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

const AuthButton = () => {
  const auth = useAuth();

  return auth.loggedIn ? (
    <button type="button" className="btn btn-primary" onClick={auth.logOut}>
      Выйти
    </button>
  ) : null;
};

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  return auth.loggedIn ? children : <Navigate to="/login" />;
};

const App = () => (
  <AuthProvider>
    <div className="h-100 bg-light">
      <div className="h-100" id="chat">
        <div className="d-flex flex-column h-100">
          <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
            <div className="container">
              <Link className="navbar-brand" to="/">
                Hexlet Chat
              </Link>
              <AuthButton />
            </div>
          </nav>
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
      </div>
    </div>
  </AuthProvider>
);

export default App;
