import { configureStore } from "@reduxjs/toolkit";
import CitySlice from "../slices/CitySlice";

const store = configureStore(
  {
    reducer: {
      citys: CitySlice,
    },
  },
);
export default store;