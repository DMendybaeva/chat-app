import { useFormikContext } from 'formik';
import { FloatingLabel, Form } from 'react-bootstrap';

export const UsernameInput = () => {
  const { values, handleChange, errors } = useFormikContext();

  return (
    <FloatingLabel label="Имя пользователя" className="mb-3">
      <Form.Control
        type="text"
        id="username"
        name="username"
        placeholder="username"
        onChange={handleChange}
        value={values.username}
        isInvalid={errors.username}
      />
      <Form.Control.Feedback type="invalid" tooltip>
        {errors.username}
      </Form.Control.Feedback>
    </FloatingLabel>
  );
};
