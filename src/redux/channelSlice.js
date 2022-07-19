import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  roomId: 0
};

export const channelSlice = createSlice({
  name: 'channelSlice',
  initialState,
  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId;
    },
  }
});

export const { enterRoom } = channelSlice.actions;

export const selectRoomId = (state) => state.channel.roomId;

export default channelSlice.reducer;
