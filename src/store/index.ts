// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/theme';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

// Tipe untuk RootState dan AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
