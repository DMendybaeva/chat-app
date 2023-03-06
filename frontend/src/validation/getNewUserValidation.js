import * as yup from 'yup';

export const getNewUserValidation = () =>
  yup.object({
    username: yup
      .string()
      .required('forms.signupForm.errors.required')
      .min(3, 'forms.signupForm.fields.username.errors.short')
      .max(20, 'forms.signupForm.fields.username.errors.long'),
    password: yup
      .string()
      .required('forms.signupForm.errors.required')
      .min(6, 'forms.signupForm.fields.password.errors.short'),
    repeatedPassword: yup
      .string()
      .required('forms.signupForm.errors.required')
      .oneOf([yup.ref('password'), null], 'forms.signupForm.fields.repeatedPassword.errors.notMatch'),
  });
