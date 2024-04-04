import { createSlice } from "@reduxjs/toolkit";
import { loadFromLocalStorage } from "../store/middleware/loadFromLocalStorage";
import { fetchWeatherData } from "../actions/Cities";


const localData = localStorage.getItem("weatherData");

const initialState = localData
  ? loadFromLocalStorage()
  : {
      cities: [], // Şehirler için boş bir dizi
      activeCity: null,
      status: "idle",
      error: null,
    };

export const citySlice = createSlice({
  name: "weatherData",
  initialState,
  reducers: {
    // Yeni şehir eklemek için düzeltme
    setCity: (state, action) => {
      const existingCity = state.cities.find(
        (city) => city.name === action.payload.name
      );
      if (!existingCity) {
        state.cities.push(action.payload);
      }
    },
    // Aktif şehri ayarlamak için yeni bir reducer ekleme
    setActiveCity: (state, action) => {
      state.activeCity = action.payload;
    },
    removeCity: (state, action) => {
      state.cities = state.cities.filter(
        (city) => city.name !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      // eslint-disable-next-line no-unused-vars
      .addCase(fetchWeatherData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        const { name, currentWeather, forecast } = action.payload;
        const existingIndex = state.cities.findIndex(
          (city) => city.name === name
        );
        if (existingIndex !== -1) {
          state.cities[existingIndex] = { name, currentWeather, forecast };
          state.activeCity = name;
        } else {
          state.cities.push({ name, currentWeather, forecast });
          state.activeCity = name;
        }
        state.status = "succeeded";
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// Eksik olan action'ı export etme
export const { setCity, setActiveCity, removeCity } = citySlice.actions;

export default citySlice.reducer;
