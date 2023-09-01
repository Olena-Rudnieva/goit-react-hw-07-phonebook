import { createSlice } from '@reduxjs/toolkit';
// import { initialState } from './initialState';

const filterInitialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    addFilter: (state, action) => (state = action.payload),
  },
});

export const { addFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
