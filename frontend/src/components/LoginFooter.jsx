import { useTranslation } from 'react-i18next';
import { PATHS } from '../const';

export const LoginFooter = () => {
  const { t } = useTranslation();

  return (
    <div className="card-footer p-4">
      <div className="text-center">
        <span>{t('forms.loginForm.footer.accountAbsence')}</span>
        {/* link */}
        <a href={PATHS.signup}>{t('forms.loginForm.footer.registration')}</a>
      </div>
    </div>
  );
};
