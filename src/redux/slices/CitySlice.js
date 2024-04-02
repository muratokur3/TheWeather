import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"; // Axios import edildi
import { loadFromLocalStorage } from "../store/middleware/loadFromLocalStorage";

export const fetchWeatherData = createAsyncThunk(
  "weatherData/fetchWeather",
  async (cityName, { rejectWithValue }) => {
    try {
      // Axios istekleri için gerçek API URL'leri ve parametrelerinizi ekleyin
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=tr&units=metric&appid=3a624872bbe7babf701dee83da65a57c`
      );
      console.log(weatherResponse);
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast`,
        {
          params: {
            q: cityName,
            lang: "tr",
            units: "metric",
            appid: "3a624872bbe7babf701dee83da65a57c",
          },
        }
      );

      const days = {};

      forecastResponse.data.list.forEach((item) => {
        const date = new Date(item.dt * 1000);
        const day = date.toISOString().split("T")[0]; // YYYY-MM-DD formatında tarihi al

        if (!days[day]) {
          days[day] = [];
        }

        days[day].push(item);
      });

      const dailyForecasts = Object.keys(days).map((day) => {
        // Her gün için öğle saatine en yakın tahmini bul
        const forecasts = days[day];
        let closestToNoon = forecasts[0];
        let smallestDiff = Math.abs(
          12 * 3600 - new Date(forecasts[0].dt * 1000).getHours() * 3600
        );

        forecasts.forEach((forecast) => {
          const diff = Math.abs(
            12 * 3600 - new Date(forecast.dt * 1000).getHours() * 3600
          );
          if (diff < smallestDiff) {
            closestToNoon = forecast;
            smallestDiff = diff;
          }
        });

        return closestToNoon;
      });

      return {
        name: cityName,
        currentWeather: weatherResponse.data,
        forecast: dailyForecasts.slice(0, 5),
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

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
      console.log(action.payload);
      state.activeCity = action.payload;
    },
    removeCity: (state, action) => {
      state.cities = state.cities.filter(
        (city, index) => city.name !== action.payload || index === 0
      );
    },
  },
  extraReducers: (builder) => {
    builder
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
