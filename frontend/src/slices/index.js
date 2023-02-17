import { configureStore } from '@reduxjs/toolkit';
import channelsReducer from './channelsSlice';

const store = configureStore({
  reducer: {
    channelsReducer,
  },
});
export default store;
