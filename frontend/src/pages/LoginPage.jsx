import { useTranslation } from 'react-i18next';
import imgSrc from '../assets/login.jpg';
import { LoginForm } from '../components/LoginForm/index';
import { PATHS } from '../const';

export const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-content-center h-100">
        <div className="col-12 col-md-8 col-xxl-6">
          <div className="card shadow-sm">
            <div className="card-body row p-5">
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <img src={imgSrc} alt={t('forms.loginForm.title')} className="rounded-circle" />
              </div>
              <LoginForm />
            </div>
            <div className="card-footer p-4">
              <div className="text-center">
                <span>{t('forms.loginForm.footer.accountAbsence')}</span>
                <a href={PATHS.signup}>{t('forms.loginForm.footer.registration')}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
