import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setChannels } from '../slices/channelsSlice';
import { setMessages } from '../slices/messagesSlice';
import Channels from '../components/Channels';
import Messages from '../components/Messages';

const getAuthHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` };
  }

  return {};
};

const HomePage = () => {
  const authHeader = getAuthHeader();
  const dispatch = useDispatch();

  useEffect(() => {
    const requestData = async () => {
      const response = await axios.get('/api/v1/data', {
        headers: authHeader,
      });
      dispatch(setChannels(response.data.channels));
      dispatch(setMessages(response.data.messages));
    };
    requestData();
  }, []);
  return (
    <>
      <Channels />
      <Messages />
    </>
  );
};

export default HomePage;
