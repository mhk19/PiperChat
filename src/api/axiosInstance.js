import { CONFIG } from '../config/config';
import axios from 'axios';

export const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  baseURL: CONFIG.serverURL,
});
