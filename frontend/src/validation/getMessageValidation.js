import * as yup from 'yup';

export const getMessageValidation = () =>
  yup.object({
    text: yup.string().trim().required(),
  });
