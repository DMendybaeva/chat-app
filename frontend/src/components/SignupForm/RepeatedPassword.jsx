import { useFormikContext } from 'formik';
import { FloatingLabel, Form } from 'react-bootstrap';

export const RepeatedPassword = () => {
  const { values, handleChange, errors } = useFormikContext();

  return (
    <FloatingLabel label="Подтвердите пароль" className="mb-3">
      <Form.Control
        type="password"
        id="repeatedPassword"
        name="repeatedPassword"
        placeholder="password"
        onChange={handleChange}
        value={values.repeatedPassword}
        isInvalid={errors.repeatedPassword}
      />
      <Form.Control.Feedback type="invalid" tooltip>
        {errors.repeatedPassword}
      </Form.Control.Feedback>
      {errors.auth && <div style={{ color: 'red' }}>{errors.auth}</div>}
    </FloatingLabel>
  );
};
