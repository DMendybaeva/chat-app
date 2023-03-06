import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { getLoginValidation } from '../../validation/getLoginValidation';
import { PATHS } from '../../const';
import { UsernameInput } from './UsernameInput';
import { PasswordInput } from './PasswordInput';
import { useAuth } from '../../providers/AuthProvider/index';

export const LoginForm = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={getLoginValidation()}
      validateOnChange={false}
      onSubmit={async (values, { setFieldError }) => {
        try {
          const response = await axios.post('/api/v1/login', values);
          localStorage.setItem('user', JSON.stringify(response.data));
          auth.logIn();
          navigate(PATHS.home);
        } catch (e) {
          if (e.response.data.statusCode === 401) {
            setFieldError('auth', t('forms.loginForm.errors.auth'));
          } else {
            console.log(e.response.data);
          }
        }
      }}
    >
      {(props) => (
        <Form className="w-50" onSubmit={props.handleSubmit}>
          <h1 className="text-center mb-4">{t('forms.loginForm.title')}</h1>
          <UsernameInput />
          <PasswordInput />
          <Button variant="outline-primary" type="submit" className="w-100">
            {t('forms.loginForm.loginButton')}
          </Button>
        </Form>
      )}
    </Formik>
  );
};
