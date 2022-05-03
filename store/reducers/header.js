import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSearchOpen: false,
  activeItem: null,
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setIsSearchOpen: (state) => {
      state.isSearchOpen = !state.isSearchOpen;
    },

    setActiveItem: (state, { payload }) => {
      state.activeItem = payload;
    },
  },
});

export const { setIsSearchOpen, setActiveItem } = headerSlice.actions;

export default headerSlice.reducer;
