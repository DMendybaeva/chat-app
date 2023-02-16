import axios from 'axios';
import { useEffect, useState } from 'react';

const getAuthHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` };
  }

  return {};
};

const HomePage = () => {
  const authHeader = getAuthHeader();
  const [data, setData] = useState([]);

  useEffect(() => {
    const requestData = async () => {
      const response = await axios.get('/api/v1/data', {
        headers: authHeader,
      });
      setData(response.data.channels);
    };
    requestData();
  }, []);
  return data.map((el) => <div key={el.id}>{el.name}</div>);
};

export default HomePage;
