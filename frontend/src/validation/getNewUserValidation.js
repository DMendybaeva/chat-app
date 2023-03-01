import * as yup from 'yup';

export const getNewUserValidation = () =>
  yup.object({
    username: yup.string().required('Обязательное поле').min(3, 'От 3 до 20 символов').max(20, 'От 3 до 20 символов'),
    password: yup.string().required('Обязательное поле').min(5, 'Не менее 6 символов'),
    repeatedPassword: yup
      .string()
      .required('Обязательное поле')
      .oneOf([yup.ref('password'), null], 'Пароли должны совпадать'),
  });
