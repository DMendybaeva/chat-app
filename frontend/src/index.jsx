import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import io from 'socket.io-client';
import './i18n';
import filter from 'leo-profanity';

import { App } from './App';
import { store } from './store/index';
import { AuthProvider } from './providers/AuthProvider/index';
import { SocketProvider } from './providers/SocketProvider';
import { ErrorBoundary } from './ErrorBoundary';

const socket = io();

filter.add(filter.getDictionary('ru'));
filter.add(filter.getDictionary('en'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Provider store={store}>
          <SocketProvider socket={socket}>
            <AuthProvider>
              <App />
            </AuthProvider>
          </SocketProvider>
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
);
