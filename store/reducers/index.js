import { combineReducers } from '@reduxjs/toolkit';
import header from 'store/reducers/header';
import movie from 'store/reducers/movie';

export default combineReducers({
  header,
  movie,
});
