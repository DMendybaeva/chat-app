import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import imgSrc from '../assets/notFoundPage.svg';

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <div className="text-center">
      <img src={imgSrc} alt="Cтраница не найдена" className="img-fluid h-25" />
      <h1 className="h4 text-muted">{t('pages.notFoundPage.notFound')}</h1>
      <p className="text-muted">
        {t('pages.notFoundPage.go')}
        <Link to="/">{t('pages.notFoundPage.homeLink')}</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
