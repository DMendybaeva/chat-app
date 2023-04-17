import { useTranslation } from 'react-i18next';
import { Card, Col, Image } from 'react-bootstrap';
import imgSrc from '../assets/login.jpg';
import { LoginForm } from '../components/LoginForm/index';
import { UnauthorizedLayout } from '../components/UnauthorizedLayout';
import { LoginFooter } from '../components/LoginFooter';

export const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <UnauthorizedLayout>
      <Card>
        <Card.Body className="row p-5">
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <Image roundedCircle alt={t('forms.loginForm.title')} src={imgSrc} />
          </Col>
          <Col md={6}>
            <LoginForm />
          </Col>
        </Card.Body>
        <LoginFooter />
      </Card>
    </UnauthorizedLayout>
  );
};
