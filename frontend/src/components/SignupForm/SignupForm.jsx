import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { getNewUserValidation } from '../../validation/getNewUserValidation';
import { useAuth } from '../../providers/AuthProvider/index';
import { PATHS } from '../../const';
import { UsernameInput } from './UsernameInput';
import { PasswordInput } from './PasswordInput';
import { RepeatedPassword } from './RepeatedPassword';

export const SignupForm = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
        repeatedPassword: '',
      }}
      validationSchema={getNewUserValidation()}
      validateOnChange={false}
      onSubmit={async (values, { setFieldError }) => {
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
      }}
    >
      {(props) => (
        <Form className="w-50" onSubmit={props.handleSubmit}>
          <h1 className="text-center mb-4">Регистрация</h1>
          <UsernameInput />
          <PasswordInput />
          <RepeatedPassword />
          <Button variant="outline-primary" type="submit" className="w-100">
            Зарегистрироваться
          </Button>
        </Form>
      )}
    </Formik>
  );
};
