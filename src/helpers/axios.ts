import axios from 'axios';

const apiPath = import.meta.env.VITE_API_PATH;
const apiTimeOut = import.meta.env.VITE_API_TIMEOUT;

const api = axios.create({
  baseURL: apiPath,
  timeout: apiTimeOut || 15000,
});

export { axios, api };
