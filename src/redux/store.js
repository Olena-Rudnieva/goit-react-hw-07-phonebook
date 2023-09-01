import { configureStore } from '@reduxjs/toolkit';
import { combineReducer } from './reduser';

export const store = configureStore({
  reducer: combineReducer,
});
