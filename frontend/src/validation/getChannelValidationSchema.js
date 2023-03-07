import * as yup from 'yup';

export const getChannelValidationSchema = (channels) =>
  yup.object({
    channelName: yup
      .string()
      .min(3, 'modals.errors.short')
      .max(20, 'modals.errors.long')
      .notOneOf(
        channels.map((channel) => channel.name),
        'modals.errors.unique',
      )
      .required('modals.errors.required'),
  });
