import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const ErrorPageContent = () => {
  const { t } = useTranslation();
  return (
    <div className="text-center d-flex justify-content-center align-items-center flex-column vh-100">
      <h1>{t('errorPageContent.header')}</h1>
      <p>{t('errorPageContent.body')}</p>
      <Button onClick={() => window.location.reload()}>{t('errorPageContent.reloadButton')}</Button>
    </div>
  );
};
