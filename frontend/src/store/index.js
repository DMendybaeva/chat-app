import { configureStore } from '@reduxjs/toolkit';
import chatsReducer from './chatsSlice';
import modalsReducer from './modalsSlice';

const store = configureStore({
  reducer: {
    chats: chatsReducer,
    modals: modalsReducer,
  },
});
export default store;
