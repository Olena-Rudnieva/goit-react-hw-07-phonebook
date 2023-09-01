import { combineReducers } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice';
import { filterReducer } from './filterSlice';

export const combineReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});
