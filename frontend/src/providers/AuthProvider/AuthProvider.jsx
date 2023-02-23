import { useState, useMemo } from 'react';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }) => {
  const initialState = Boolean(localStorage.getItem('user'));

  const [loggedIn, setLoggedIn] = useState(initialState);

  const getAuthHeader = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
      return { Authorization: `Bearer ${user.token}` };
    }

    return {};
  };

  const logIn = () => setLoggedIn(true);
  const logOut = () => {
    localStorage.removeItem('user');
    setLoggedIn(false);
  };

  const authInfo = useMemo(() => ({ loggedIn, logIn, logOut, getAuthHeader }), [loggedIn]);

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};
