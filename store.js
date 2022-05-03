import { configureStore } from '@reduxjs/toolkit';
import reducer from './store/reducers';

export default configureStore({
  reducer,
});
