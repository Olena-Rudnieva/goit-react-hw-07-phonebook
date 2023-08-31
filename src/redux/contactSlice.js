import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { nanoid } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(data) {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },

    deleteContact: (state, action) =>
      state.filter(el => el.id !== action.payload),
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
