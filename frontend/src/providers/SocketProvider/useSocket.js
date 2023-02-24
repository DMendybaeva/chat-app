import { useContext } from 'react';
import { SocketContext } from './SocketContext';

export const useSocket = () => {
  const value = useContext(SocketContext);

  if (!value) {
    throw new Error('useSocket should be used within SocketProvider');
  }

  return value;
};
