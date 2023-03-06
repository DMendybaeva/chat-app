import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'Welcome to React': 'Welcome to React and react-i18next',
    },
  },
  ru: {
    translation: {
      forms: {
        loginForm: {
          title: 'Войти',
          loginButton: 'Войти',
          footer: {
            accountAbsence: 'Нет аккаунта?',
            registration: 'Регистрация',
          },
          fields: {
            username: {
              label: 'Ваш ник',
              placeholder: 'Ваш ник',
            },
            password: {
              label: 'Пароль',
              placeholder: 'Пароль',
            },
          },
          errors: {
            required: 'Необходимо заполнить',
            auth: 'Неверные имя пользователя или пароль',
          },
        },
        signupForm: {
          title: 'Регистрация',
          signupButton: 'Зарегистрироваться',
          fields: {
            username: {
              label: 'Имя пользователя',
              placeholder: 'Имя пользователя',
              errors: {
                short: 'От 3 до 20 символов',
                long: 'От 3 до 20 символов',
              },
            },
            password: {
              label: 'Пароль',
              placeholder: 'Пароль',
              errors: {
                short: 'Не менее 6 символов',
              },
            },
            repeatedPassword: {
              label: 'Подтвердите пароль',
              placeholder: 'Подтвердите пароль',
              errors: {
                notMatch: 'Пароли должны совпадать',
              },
            },
          },
          errors: {
            required: 'Обязательное поле',
            auth: "Пользователь с именем '{{ username }}' уже существует",
          },
        },
      },
      pages: {
        notFoundPage: {
          notFound: 'Страница не найдена',
          go: 'Но вы можете перейти ',
          homeLink: 'на главную страницу',
        },
        homePage: {
          channels: {
            channelsTitle: 'Каналы',
            currentChannel: '# {{ currentChannelName }}',
            channelName: '# {{channelName}}',
            dropdownButtonDelete: 'Удалить',
            dropdownButtonRename: 'Переименовать',
          },
          messages: {
            sendMessageButton: 'Отправить',
            messagesCount: {
              key_zero: '{{messagesCount}} сообщений',
              key_one: '{{messagesCount}} сообщение',
              key_two: '{{messagesCount}} сообщения',
              key_few: '{{messagesCount}} сообщения',
              key_many: '{{messagesCount}} сообщений',
              key_other: '{{messagesCount}} сообщений',
            },
            messageUsername: '{{username}}: ',
            messageText: '{{text}}',
          },
        },
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'ru',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
