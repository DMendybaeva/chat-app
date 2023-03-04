import { useFormikContext } from 'formik';
import { FloatingLabel, Form } from 'react-bootstrap';

export const PasswordInput = () => {
  const { values, handleChange, errors } = useFormikContext();

  return (
    <FloatingLabel label="Пароль" className="mb-3">
      <Form.Control
        type="password"
        id="password"
        name="password"
        placeholder="password"
        onChange={handleChange}
        value={values.password}
        isInvalid={errors.password}
      />
      <Form.Control.Feedback type="invalid" tooltip>
        {errors.password}
      </Form.Control.Feedback>
      {errors.auth && <div style={{ color: 'red' }}>{errors.auth}</div>}
    </FloatingLabel>
  );
};
