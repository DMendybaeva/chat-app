import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PATHS } from '../const';

export const SignupFooter = () => {
  const { t } = useTranslation();

  return (
    <div className="card-footer p-4">
      <div className="text-center">
        <span>{t('forms.signupForm.footer.accountExist')}</span>
        <Link to={PATHS.login}>{t('forms.signupForm.footer.registration')}</Link>
      </div>
    </div>
  );
};
