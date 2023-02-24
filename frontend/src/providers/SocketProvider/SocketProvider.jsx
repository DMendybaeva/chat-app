import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../slices/chatsSlice';

import { SocketContext } from './SocketContext';

export const SocketProvider = ({ children, socket }) => {
  const dispath = useDispatch();

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected');
    });

    socket.on('newMessage', (message) => dispath(addMessage(message)));

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('newMessage');
    };
  }, []);

  return (
    <SocketContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        connect: () => socket.connect(),
        disconnect: () => socket.disconnect(),
        newMessage: (message) => socket.emit('newMessage', message),
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
