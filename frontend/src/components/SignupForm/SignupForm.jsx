import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { getNewUserValidation } from '../../validation/getNewUserValidation';
import { useAuth } from '../../providers/AuthProvider/index';
import { PATHS } from '../../const';

export const SignupForm = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      repeatedPassword: '',
    },
    validationSchema: getNewUserValidation(),
    validateOnChange: false,
    onSubmit: async (values, { setFieldError }) => {
      try {
        const response = await axios.post('/api/v1/signup', { username: values.username, password: values.password });
        localStorage.setItem('user', JSON.stringify(response.data));
        auth.logIn();
        navigate(PATHS.home);
      } catch (e) {
        if (e.response.data.statusCode === 409) {
          setFieldError('auth', 'Такой пользователь уже существует');
        } else {
          console.log(e.response.data);
        }
      }
    },
  });
  return (
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
          {formik.errors.auth && <div style={{ color: 'red' }}>{formik.errors.auth}</div>}
        </FloatingLabel>
      </Form.Group>
      <Button variant="outline-primary" type="submit" className="w-100">
        Зарегистрироваться
      </Button>
    </Form>
  );
};
