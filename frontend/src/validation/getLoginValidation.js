import * as yup from 'yup';

export const getLoginValidation = () =>
  yup.object({
    username: yup.string().required('Заполните это поле'),
    password: yup.string().required('Заполните это поле'),
  });
