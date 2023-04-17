import { useTranslation } from 'react-i18next';
import { Image, Card, Col } from 'react-bootstrap';
import imgSrc from '../assets/signup.jpg';
import { SignupForm } from '../components/SignupForm/index';
import { UnauthorizedLayout } from '../components/UnauthorizedLayout';
import { SignupFooter } from '../components/SignupFooter';

export const SignupPage = () => {
  const { t } = useTranslation();

  return (
    <UnauthorizedLayout>
      <Card>
        <Card.Body className="row p-5">
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <Image roundedCircle alt={t('forms.signupForm.title')} src={imgSrc} />
          </Col>
          <Col md={6} className="mt-3 mt-mb-0">
            <SignupForm />
          </Col>
        </Card.Body>
        <SignupFooter />
      </Card>
    </UnauthorizedLayout>
  );
};
