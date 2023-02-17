import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
};

const messagesSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    setMessages: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.messages = payload;
    },
  },
});

export const { setMessages } = messagesSlice.actions;
export default messagesSlice.reducer;
