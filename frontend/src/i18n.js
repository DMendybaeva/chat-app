import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      forms: {
        loginForm: {
          title: 'Enter',
          loginButton: 'Enter',
          footer: {
            accountAbsence: 'No account?',
            registration: 'Sign up',
          },
          fields: {
            username: {
              label: 'Username',
              placeholder: 'Username',
            },
            password: {
              label: 'Password',
              placeholder: 'Password',
            },
          },
          errors: {
            required: 'Required',
            auth: 'Invalid username or password',
          },
        },
        signupForm: {
          title: 'Registration',
          signupButton: 'Sign up',
          fields: {
            username: {
              label: 'Username',
              placeholder: 'Username',
              errors: {
                short: 'From 3 to 20 characters',
                long: 'From 3 to 20 characters',
              },
            },
            password: {
              label: 'Password',
              placeholder: 'Password',
              errors: {
                short: 'At least 6 characters',
              },
            },
            repeatedPassword: {
              label: 'Confirm password',
              placeholder: 'Confirm password',
              errors: {
                notMatch: 'Passwords must match',
              },
            },
          },
          errors: {
            required: 'Required',
            auth: "User with name '{{ username }}' already exists",
          },
        },
      },
      pages: {
        notFoundPage: {
          notFound: 'Page not found',
          go: 'Alternatively, you can visit the ',
          homeLink: 'Main Page',
        },
        homePage: {
          form: {
            sendMessageButton: 'Send',
            label: 'New message',
            placeholder: 'Enter your message...',
          },
          channels: {
            channelsTitle: 'Channels',
            currentChannel: '# {{ currentChannelName }}',
            channelName: '# {{channelName}}',
            dropdownButtonDelete: 'Delete',
            dropdownButtonRename: 'Rename',
          },
          messages: {
            messagesCount: {
              key_zero: '{{messagesCount}} message',
              key_one: '{{messagesCount}} message',
              key_many: '{{messagesCount}} messages',
              key_other: '{{messagesCount}} messages',
            },
            messageUsername: '{{username}}: ',
            messageText: '{{text}}',
          },
        },
      },
      modals: {
        renameChannelModal: {
          title: 'Rename channel',
          label: 'Channel name',
          buttonSend: 'Send',
          buttonCancel: 'Сancel',
        },
        removeChannelModal: {
          title: 'Delete channel',
          body: 'Are you sure?',
          buttonSend: 'Send',
          buttonCancel: 'Сancel',
        },
        addChannelModal: {
          title: 'Add channel',
          label: 'Channel name',
          buttonSend: 'Send',
          buttonCancel: 'Сancel',
        },
        errors: {
          required: 'Required',
          short: 'From 3 to 20 characters',
          long: 'From 3 to 20 characters',
          unique: 'Must be unique',
        },
      },
      navbar: {
        authButton: 'Sign out',
        homeLink: 'Hexlet Chat',
      },
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
          form: {
            sendMessageButton: 'Отправить',
            label: 'Новое сообщение',
            placeholder: 'Введите сообщение...',
          },
          channels: {
            channelsTitle: 'Каналы',
            currentChannel: '# {{ currentChannelName }}',
            channelName: '# {{channelName}}',
            dropdownButtonDelete: 'Удалить',
            dropdownButtonRename: 'Переименовать',
          },
          messages: {
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
      modals: {
        renameChannelModal: {
          title: 'Переименовать канал',
          label: 'Имя канала',
          buttonSend: 'Отправить',
          buttonCancel: 'Отменить',
        },
        removeChannelModal: {
          title: 'Удалить канал',
          body: 'Уверены?',
          buttonSend: 'Отправить',
          buttonCancel: 'Отменить',
        },
        addChannelModal: {
          title: 'Добавить канал',
          label: 'Имя канала',
          buttonSend: 'Отправить',
          buttonCancel: 'Отменить',
        },
        errors: {
          required: 'Обязательное поле',
          short: 'От 3 до 20 символов',
          long: 'От 3 до 20 символов',
          unique: 'Должно быть уникальным',
        },
      },
      navbar: {
        authButton: 'Выйти',
        homeLink: 'Hexlet Chat',
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',

    interpolation: {
      escapeValue: false,
    },
    debug: true,
  });

export default i18n;
