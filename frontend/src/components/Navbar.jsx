import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { AuthButton } from './AuthButton';
import { PATHS } from '../const';
import { LangSwitcher } from './LangSwitcher';

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <Link className="navbar-brand" to={PATHS.home}>
          {t('navbar.homeLink')}
        </Link>
        <div>
          <LangSwitcher />
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};
