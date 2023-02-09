import { useFormik } from 'formik';

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">
        name
        <input id="name" name="name" type="text" onChange={formik.handleChange} value={formik.values.name} />
      </label>
      <label htmlFor="password">
        password
        <input id="password" name="password" onChange={formik.handleChange} value={formik.values.lastName} />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginPage;
