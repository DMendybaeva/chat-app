### linter status:

[![Eslint check](https://github.com/DMendybaeva/chat-app/workflows/eslint-check/badge.svg)](https://github.com/DMendybaeva/chat-app/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/da834f8ac050eefd98b9/maintainability)](https://codeclimate.com/github/DMendybaeva/chat-app/maintainability)

This project is simple implementation of minimal chat application, like Slack, etc. After registration you can managing (add, rename and remove) channels, add messages.
You can check deployed project on [Railway](chat-app-production-159a.up.railway.app).

Used technologies:

- [Web sockets](https://socket.io/)
- [React](https://reactjs.org/)
- [RTK](https://redux-toolkit.js.org/) for managing UI state.
- [React-router-v6](https://reactrouter.com/en/main) for routing.
- [React-bootstrap](https://react-bootstrap.github.io/) for layout.
- [React-toastify](https://www.npmjs.com/package/react-toastify) for notifications.
- [Formik](https://formik.org/) for managing forms.
- [Yup](https://www.npmjs.com/package/yup) for validation.
- [axios](https://axios-http.com/) for HTTP requests.
- [i18next](https://www.i18next.com/) for manipulations with text.
- [Leo-profanity](https://www.npmjs.com/package/leo-profanity) for managing bad words.

## Installation

Clone project

```sh
git clone git@github.com:DMendybaeva/chat-app.git
```

Go in project dir

```sh
cd chat-app
```

Install dependecies

```sh
make install
```

Start dev version:

```sh
make start
```

### Authors:

- Diana Mendybaeva
