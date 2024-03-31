import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const citySlice = createSlice({
  name: "citys",
  initialState,
  reducers: {
    setCity: (state, action) => {
      if (!state.find((item) => item.name === action.payload.name)) {
        state.push(action.payload);
      }
    },
  },
});
export const { setCity } = citySlice.actions;
export default citySlice.reducer;
