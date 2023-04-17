import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PATHS } from '../const';

export const LoginFooter = () => {
  const { t } = useTranslation();

  return (
    <div className="card-footer p-4">
      <div className="text-center">
        <span>{t('forms.loginForm.footer.accountAbsence')}</span>
        <Link to={PATHS.signup}>{t('forms.loginForm.footer.registration')}</Link>
      </div>
    </div>
  );
};
