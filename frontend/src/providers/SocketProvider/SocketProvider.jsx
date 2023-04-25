import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { addMessage, addChannel, removeChannel, renameChannel } from '../../store/chatsSlice';
import { SocketContext } from './SocketContext';

export const SocketProvider = ({ children, socket }) => {
  const dispath = useDispatch();
  const values = useMemo(
    () => ({
      newMessage: (message, response) => socket.volatile.emit('newMessage', message, response),
      newChannel: (channel, response) => socket.volatile.emit('newChannel', channel, response),
      removeChannel: (channel) => socket.volatile.emit('removeChannel', channel),
      renameChannel: (channel) => socket.volatile.emit('renameChannel', channel),
    }),
    [socket.volatile],
  );

  useEffect(() => {
    socket.on('newMessage', (message) => dispath(addMessage(message)));
    socket.on('newChannel', (channel) => dispath(addChannel(channel)));
    socket.on('removeChannel', (channel) => dispath(removeChannel(channel)));
    socket.on('renameChannel', (channel) => dispath(renameChannel(channel)));

    return () => {
      socket.off('newMessage');
      socket.off('newChannel');
      socket.off('removeChannel');
      socket.off('renameChannel');
    };
  }, [dispath, socket]);

  return <SocketContext.Provider value={values}>{children}</SocketContext.Provider>;
};
