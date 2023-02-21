import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import { useAuth } from '../providers/AuthProvider/index';
import login from '../images/login.jpg';

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
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-content-center h-100">
        <div className="col-12 col-md-8 col-xxl-6">
          <div className="card shadow-sm">
            <div className="card-body row p-5">
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <img src={login} alt="Войти" className="rounded-circle" />
              </div>
              <form className="col-12 col-md-6 mt-3 mt-mb-0" onSubmit={formik.handleSubmit}>
                <h1 className="text-center mb-4">Войти</h1>
                <div className="form-floating mb-3">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    placeholder="Ваш ник"
                    className="form-control"
                    autoComplete="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    ref={inputEl}
                  />
                  <label htmlFor="username">
                    Ваш ник
                    <div>{formik.errors.username}</div>
                  </label>
                </div>
                <div className="form-floating mb-4">
                  <input
                    id="password"
                    name="password"
                    required
                    placeholder="Пароль"
                    className="form-control"
                    autoComplete="password"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                  />
                  <label htmlFor="password">
                    Пароль
                    <div>{formik.errors.password}</div>
                  </label>
                </div>
                <div>{error}</div>
                <button type="submit" className="w-100 mb-3 btn btn-outline-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="card-footer p-4">
              <div className="text-center">
                <span>Нет аккаунта?</span>
                <a href="/signup">Регистрация</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
