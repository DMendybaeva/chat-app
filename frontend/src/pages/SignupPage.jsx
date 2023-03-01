import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import imgSrc from '../assets/signup.jpg';
import { getNewUserValidation } from '../validation/getNewUserValidation';
import { useAuth } from '../providers/AuthProvider/index';

const SignupPage = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      repeatedPassword: '',
    },
    validationSchema: getNewUserValidation(),
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        const response = await axios.post('/api/v1/signup', { username: values.username, password: values.password });
        localStorage.setItem('user', JSON.stringify(response.data));
        auth.logIn();
        navigate('/');
      } catch (e) {
        setError('Такой пользователь уже существует');
      }
    },
  });

  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-content-center h-100">
        <div className="col-12 col-md-8 col-xxl-6">
          <div className="card shadow-sm">
            <div className="card-body d-flex flex-column flex-md-row justify-content-around align-items-center p-5">
              <img src={imgSrc} className="rounded-circle" alt="Регистрация" />
              <Form className="w-50" onSubmit={formik.handleSubmit}>
                <h1 className="text-center mb-4">Регистрация</h1>
                <Form.Group className="form-floating mb-3">
                  <FloatingLabel label="Имя пользователя" className="mb-3">
                    <Form.Control
                      type="text"
                      id="username"
                      name="username"
                      placeholder="username"
                      onChange={formik.handleChange}
                      value={formik.values.username}
                      isInvalid={formik.errors.username}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {formik.errors.username}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                  <FloatingLabel label="Пароль" className="mb-3">
                    <Form.Control
                      type="password"
                      id="password"
                      name="password"
                      placeholder="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      isInvalid={formik.errors.password}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {formik.errors.password}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                  <FloatingLabel label="Подтвердите пароль" className="mb-3">
                    <Form.Control
                      type="password"
                      id="repeatedPassword"
                      name="repeatedPassword"
                      placeholder="password"
                      onChange={formik.handleChange}
                      value={formik.values.repeatedPassword}
                      isInvalid={formik.errors.repeatedPassword}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {formik.errors.repeatedPassword}
                    </Form.Control.Feedback>
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                  </FloatingLabel>
                </Form.Group>
                <Button variant="outline-primary" type="submit" className="w-100">
                  Зарегистрироваться
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignupPage;
