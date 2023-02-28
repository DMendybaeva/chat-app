import * as yup from 'yup';

export const AddChannelSchema = (channels) =>
  yup.object({
    channelName: yup
      .string()
      .min(3, 'От 3 до 20 символов')
      .max(20, 'От 3 до 20 символов')
      .notOneOf(
        channels.map((channel) => channel.name),
        'Должно быть уникальным',
      ),
  });
