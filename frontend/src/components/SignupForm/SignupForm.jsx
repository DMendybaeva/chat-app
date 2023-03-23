import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { getNewUserValidation } from './getNewUserValidation';
import { useAuth } from '../../providers/AuthProvider/index';
import { PATHS } from '../../const';
import { UsernameInput } from './UsernameInput';
import { PasswordInput } from './PasswordInput';
import { RepeatedPassword } from './RepeatedPassword';
import { showErrorToast } from '../../helpers/showToast';

export const SignupForm = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

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
          if (e?.response?.data?.statusCode === 409) {
            setFieldError('auth', t('forms.signupForm.errors.auth', { username: values.username }));
          } else {
            showErrorToast(t('toasts.error'));
          }
        }
      }}
    >
      {(props) => (
        <Form className="w-50" onSubmit={props.handleSubmit}>
          <h1 className="text-center mb-4">{t('forms.signupForm.title')}</h1>
          <UsernameInput />
          <PasswordInput />
          <RepeatedPassword />
          <Button variant="outline-primary" type="submit" className="w-100">
            {t('forms.signupForm.signupButton')}
          </Button>
        </Form>
      )}
    </Formik>
  );
};
