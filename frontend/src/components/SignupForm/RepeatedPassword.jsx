import { useFormikContext } from 'formik';
import { FloatingLabel, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const RepeatedPassword = () => {
  const { values, handleChange, errors } = useFormikContext();
  const { t } = useTranslation();

  return (
    <FloatingLabel label={t('forms.signupForm.fields.repeatedPassword.label')} className="mb-3">
      <Form.Control
        type="password"
        id="repeatedPassword"
        name="repeatedPassword"
        placeholder={t('forms.signupForm.fields.repeatedPassword.placeholder')}
        onChange={handleChange}
        value={values.repeatedPassword}
        isInvalid={errors.repeatedPassword}
      />
      <Form.Control.Feedback type="invalid" tooltip>
        {t(errors.repeatedPassword)}
      </Form.Control.Feedback>
      {errors.auth && <div style={{ color: 'red' }}>{errors.auth}</div>}
    </FloatingLabel>
  );
};
