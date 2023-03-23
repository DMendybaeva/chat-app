import * as yup from 'yup';

export const getLoginValidation = () =>
  yup.object({
    username: yup.string().required('forms.loginForm.errors.required'),
    password: yup.string().required('forms.loginForm.errors.required'),
  });
