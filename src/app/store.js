import { configureStore } from '@reduxjs/toolkit';
import channelReducer from '../redux/channelSlice';

export const store = configureStore({
  reducer: {
    channel: channelReducer,
  },
});
