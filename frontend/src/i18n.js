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
