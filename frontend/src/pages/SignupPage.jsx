import { useTranslation } from 'react-i18next';
import imgSrc from '../assets/signup.jpg';
import { SignupForm } from '../components/SignupForm/index';
import { UnauthorizedLayout } from '../components/UnauthorizedLayout';
import { SignupFooter } from '../components/SignupFooter';

export const SignupPage = () => {
  const { t } = useTranslation();

  return (
    <UnauthorizedLayout>
      <div className="card-body d-flex flex-column flex-md-row justify-content-around align-items-center p-5">
        <img src={imgSrc} className="rounded-circle" alt={t('forms.signupForm.title')} />
        <SignupForm />
      </div>
      <SignupFooter />
    </UnauthorizedLayout>
  );
};
