import { useTranslation } from 'react-i18next';
import imgSrc from '../assets/login.jpg';
import { LoginForm } from '../components/LoginForm/index';
import { SignupLoginLayout } from '../components/SignupLoginLayout';
import { LoginFooter } from '../components/LoginFooter';

export const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <SignupLoginLayout>
      <div className="card-body row p-5">
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
          <img src={imgSrc} alt={t('forms.loginForm.title')} className="rounded-circle" />
        </div>
        <LoginForm />
      </div>
      <LoginFooter />
    </SignupLoginLayout>
  );
};
