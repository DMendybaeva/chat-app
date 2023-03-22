import { useTranslation } from 'react-i18next';
import imgSrc from '../assets/signup.jpg';
import { SignupForm } from '../components/SignupForm/index';

export const SignupPage = () => {
  const { t } = useTranslation();

  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-content-center h-100">
        <div className="col-12 col-md-8 col-xxl-6">
          <div className="card shadow-sm">
            <div className="card-body d-flex flex-column flex-md-row justify-content-around align-items-center p-5">
              <img src={imgSrc} className="rounded-circle" alt={t('forms.signupForm.title')} />
              <SignupForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
