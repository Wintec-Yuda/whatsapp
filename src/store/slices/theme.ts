// store/slices/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: "dark",
  },
  reducers: {
    setThemeMode(state, action) {
      state.mode = action.payload;
    },
  },
});

export const { setThemeMode } = userSlice.actions;
export default userSlice.reducer;
