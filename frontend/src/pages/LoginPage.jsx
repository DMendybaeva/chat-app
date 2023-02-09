import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().max(5, 'Must be 5 characters or less').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">
        name
        <input id="name" name="name" type="text" onChange={formik.handleChange} value={formik.values.name} />
        <div>{formik.errors.name}</div>
      </label>
      <label htmlFor="password">
        password
        <input id="password" name="password" onChange={formik.handleChange} value={formik.values.lastName} />
        <div>{formik.errors.password}</div>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginPage;
