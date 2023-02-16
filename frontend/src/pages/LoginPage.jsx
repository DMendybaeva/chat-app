import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/index';

const LoginPage = () => {
  const [error, setError] = useState('');

  const inputEl = useRef(null);
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().max(5, 'Must be 5 characters or less').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post('/api/v1/login', values);
        localStorage.setItem('user', JSON.stringify(response.data));
        auth.logIn();
        navigate('/');
      } catch (e) {
        setError('the username or password is incorrect');
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="username">
        name
        <input
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.username}
          ref={inputEl}
        />
        <div>{formik.errors.username}</div>
      </label>
      <label htmlFor="password">
        password
        <input id="password" name="password" onChange={formik.handleChange} value={formik.values.lastName} />
        <div>{formik.errors.password}</div>
      </label>
      <div>{error}</div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginPage;
