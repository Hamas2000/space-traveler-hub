
import { createSlice } from '@reduxjs/toolkit';

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    reservedRockets: [],
  },
  reducers: {
    setRockets: (state, action) => {
      state.rockets = action.payload;
    },
    reserveRocket: (state, action) => {
      const rocketId = action.payload;
      if (!state.reservedRockets.includes(rocketId)) {
        state.reservedRockets.push(rocketId);
      }
    },
    cancelReservation: (state, action) => {
      const rocketId = action.payload;
      state.reservedRockets = state.reservedRockets.filter(id => id !== rocketId);
    },
  },
});


export const { setRockets, reserveRocket, cancelReservation } = rocketsSlice.actions;


export default rocketsSlice.reducer;
