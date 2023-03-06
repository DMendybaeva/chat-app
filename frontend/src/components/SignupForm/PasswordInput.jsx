import { useFormikContext } from 'formik';
import { FloatingLabel, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const PasswordInput = () => {
  const { values, handleChange, errors } = useFormikContext();
  const { t } = useTranslation();

  return (
    <FloatingLabel label={t('forms.signupForm.fields.password.label')} className="mb-3">
      <Form.Control
        type="password"
        id="password"
        name="password"
        placeholder={t('forms.signupForm.fields.password.placeholder')}
        onChange={handleChange}
        value={values.password}
        isInvalid={errors.password}
      />
      <Form.Control.Feedback type="invalid" tooltip>
        {t(errors.password)}
      </Form.Control.Feedback>
    </FloatingLabel>
  );
};
