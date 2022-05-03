import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movie: {},
  bannerMovie: {},
};

export const bannerSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovie: (state, { payload }) => {
      state.movie = payload;
    },

    setBannerMovie: (state, { payload }) => {
      state.bannerMovie = payload;
    },
  },
});

export const { setMovie, setBannerMovie } = bannerSlice.actions;

export default bannerSlice.reducer;
