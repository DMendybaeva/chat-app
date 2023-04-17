import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Navbar as BootstrapNavbar } from 'react-bootstrap';

import { AuthButton } from './AuthButton';
import { PATHS } from '../const';
import { LangSwitcher } from './LangSwitcher';
import { useAuth } from '../providers/AuthProvider';

export const Navbar = () => {
  const { t } = useTranslation();
  const auth = useAuth();

  return (
    <BootstrapNavbar bg="white" expand="lg" className="shadow-sm">
      <div className="container">
        <BootstrapNavbar.Brand as={Link} to={PATHS.home}>
          {t('navbar.homeLink')}
        </BootstrapNavbar.Brand>
        <div>
          <LangSwitcher />
          {auth.loggedIn && <AuthButton />}
        </div>
      </div>
    </BootstrapNavbar>
  );
};
