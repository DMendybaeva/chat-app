import { useState, useMemo } from 'react';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }) => {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem('user')),
  };

  const [loggedIn, setLoggedIn] = useState(initialState);

  const logIn = () => setLoggedIn(true);
  const logOut = () => {
    localStorage.removeItem('user');
    setLoggedIn(false);
  };

  const authInfo = useMemo(() => ({ loggedIn, logIn, logOut }), [loggedIn]);

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};
