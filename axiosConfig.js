import axios from "axios";
const baseURL = import.meta.env.VITE_API_BASE_URL;
const instance = axios.create({
  baseURL,
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