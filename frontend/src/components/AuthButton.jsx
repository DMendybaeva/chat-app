import { useTranslation } from 'react-i18next';
import { useAuth } from '../providers/AuthProvider';

export const AuthButton = () => {
  const auth = useAuth();
  const { t } = useTranslation();

  return (
    <button type="button" className="btn btn-primary" onClick={auth.logOut}>
      {t('navbar.authButton')}
    </button>
  );
};
