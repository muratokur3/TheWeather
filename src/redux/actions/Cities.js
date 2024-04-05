import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axiosConfig"; 

export const fetchWeatherData = createAsyncThunk(
    "weatherData/fetchWeather",
    async (cityName, { rejectWithValue }) => {
      try {
        // Axios istekleri için gerçek API URL'leri ve parametrelerinizi ekleyin
        const weatherResponse = await axios.get(
          `data/2.5/weather?`,
          {
            params: {
              q: cityName,
              units: "metric",
              lang: "tr"
            },
          }
        );
  
        const forecastResponse = await axios.get(`data/2.5/forecast?`, {
          params: {
            q: cityName,
            units: "metric",
          },
        });
  
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
          name: weatherResponse.data.name,
          currentWeather: weatherResponse.data,
          forecast: dailyForecasts.slice(0, 5),
        };
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );