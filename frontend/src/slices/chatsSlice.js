/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  channels: [],
  messages: [],
  currentChannelId: null,
};

export const fetchChats = createAsyncThunk('data/fetchChats', async (headers) => {
  const response = await axios.get('/api/v1/data', {
    headers,
  });
  return response.data;
});

const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    setCurrentChannelId: (state, { payload }) => {
      state.currentChannelId = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChats.fulfilled, (state, action) => {
      state.channels = action.payload.channels;
      state.messages = action.payload.messages;
      state.currentChannelId = action.payload.currentChannelId;
    });
  },
});

export const { setCurrentChannelId } = chatsSlice.actions;
export default chatsSlice.reducer;
