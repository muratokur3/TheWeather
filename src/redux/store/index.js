import { configureStore } from "@reduxjs/toolkit";
import CitySlice from "../slices/CitySlice";
import { saveToLocalStorage } from "./middleware/saveToLocalStorage";
import { loadFromLocalStorage } from "./middleware/loadFromLocalStorage";
const store = configureStore({
  reducer: {
    weatherData: CitySlice,
  },
  // preloadedState: {
  //   weatherData: loadFromLocalStorage(),
  // },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveToLocalStorage),
  
});
export default store;
