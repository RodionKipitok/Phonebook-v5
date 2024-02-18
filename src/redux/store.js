import { configureStore } from '@reduxjs/toolkit';
import contactReducer from '../redux/contactSlice';

export default configureStore({
  reducer: {
    contact: contactReducer,
  },
});
