import { useContext } from 'react';

import { AuthContext } from './AuthContext';

export const useAuth = () => {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error('useAuth should be used within AuthProvider');
  }

  return value;
};
