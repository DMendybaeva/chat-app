import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import io from 'socket.io-client';

import App from './App';
import store from './slices/index';
import { AuthProvider } from './providers/AuthProvider/index';
import { SocketProvider } from './providers/SocketProvider';

const socket = io();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <SocketProvider socket={socket}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </SocketProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
