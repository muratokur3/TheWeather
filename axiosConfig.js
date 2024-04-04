import axios from "axios";
const baseURL = import.meta.env.VITE_OPENWEATHER_API_BASE_URL;
const key = import.meta.env.VITE_OPENWEATHER_API_KEY;
const instance = axios.create({
  baseURL,
  params: {
    appid: key,
  },
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      alert(error.response.data);
    }
    return Promise.reject(error);
  }
);

export default instance;
