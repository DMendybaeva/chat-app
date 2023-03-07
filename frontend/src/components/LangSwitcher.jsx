import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const LangSwitcher = () => {
  const { t, i18n } = useTranslation();
  const handleClick = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <Button variant="secondary" onClick={handleClick}>
      {t('navbar.langSwitcherButton')}
    </Button>
  );
};
