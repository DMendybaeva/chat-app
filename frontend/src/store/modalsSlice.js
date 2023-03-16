/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = { modalType: null, modalChannel: null }; // modalType: 'add' || 'remove' || 'rename'

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    add: (state) => {
      state.modalType = 'adding';
      state.modalChannel = null;
    },
    hide: (state) => {
      state.modalType = null;
      state.modalChannel = null;
    },
    remove: (state, { payload }) => {
      state.modalType = 'removing';
      state.modalChannel = payload;
    },
    rename: (state, { payload }) => {
      state.modalType = 'renaming';
      state.modalChannel = payload;
    },
  },
});

export const { add, hide, remove, rename } = modalsSlice.actions;
export default modalsSlice.reducer;
