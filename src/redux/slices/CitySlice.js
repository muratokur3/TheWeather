import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setCity } = citySlice.actions;
export default citySlice.reducer;
