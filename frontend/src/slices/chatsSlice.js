/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  channels: [], // {name, id, removable}
  messages: [], // {text, author, channelId, id}
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
    addMessage: (state, { payload }) => {
      state.messages = [...state.messages, payload];
    },
    addChannel: (state, { payload }) => {
      state.channels = [...state.channels, payload];
    },
    removeChannel: (state, { payload }) => {
      state.channels = state.channels.filter(({ id }) => id !== payload.id);
      state.messages = state.messages.filter((message) => message.channelId !== payload.id);
    },
    renameChannel: (state, { payload }) => {
      const updatedChannel = state.channels.find((channel) => channel.id === payload.id);
      updatedChannel.name = payload.name;
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

export const { setCurrentChannelId, addMessage, addChannel, removeChannel, renameChannel } = chatsSlice.actions;
export default chatsSlice.reducer;
