import { useFormikContext } from 'formik';
import { FloatingLabel, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const UsernameInput = () => {
  const { values, handleChange, errors } = useFormikContext();
  const { t } = useTranslation();

  return (
    <FloatingLabel label={t('forms.signupForm.fields.username.label')} className="mb-3">
      <Form.Control
        type="text"
        id="username"
        name="username"
        placeholder={t('forms.signupForm.fields.username.placeholder')}
        onChange={handleChange}
        value={values.username}
        isInvalid={errors.username}
      />
      <Form.Control.Feedback type="invalid" tooltip>
        {t(errors.username)}
      </Form.Control.Feedback>
    </FloatingLabel>
  );
};
