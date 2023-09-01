import { createSlice } from '@reduxjs/toolkit';
// import { initialState } from './initialState';
import { fetchContacts, addContacts, deleteContacts } from './operations';
import { nanoid } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contacts',
  // initialState: initialState.contacts,
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [addContacts.pending](state) {
      state.isLoading = true;
    },
    [addContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      console.log(action.payload);
      // state.push(action.payload);
    },
    [addContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deleteContacts.pending](state) {
      state.isLoading = true;
    },
    [deleteContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      // const index = state.contacts.findIndex(
      //   task => task.id === action.payload
      // );
      // state.contacts.splice(index, 1);
      state.filter(el => el.id !== action.payload);
    },
    [deleteContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  // reducers: {
  //   addContact: {
  //     reducer(state, action) {
  //       state.push(action.payload);
  //     },
  //     prepare(data) {
  //       return {
  //         payload: {
  //           id: nanoid(),
  //           ...data,
  //         },
  //       };
  //     },
  //   },
});

// export const { addContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
