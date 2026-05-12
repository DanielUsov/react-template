import axios from 'axios';

// TODO Обработка auth
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 10_000,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: import.meta.env.VITE_AUTH_STRATEGY === 'COOKIES'
});
