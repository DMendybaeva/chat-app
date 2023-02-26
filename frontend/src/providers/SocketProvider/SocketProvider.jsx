import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage, addChannel } from '../../slices/chatsSlice';

import { SocketContext } from './SocketContext';

export const SocketProvider = ({ children, socket }) => {
  const dispath = useDispatch();

  useEffect(() => {
    socket.on('newMessage', (message) => dispath(addMessage(message)));
    socket.on('newChannel', (channel) => dispath(addChannel(channel)));

    return () => {
      socket.off('newMessage');
      socket.off('newChannel');
    };
  }, []);

  return (
    <SocketContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        newMessage: (message) => socket.volatile.emit('newMessage', message),
        newChannel: (channel) => socket.volatile.emit('newChannel', channel),
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
