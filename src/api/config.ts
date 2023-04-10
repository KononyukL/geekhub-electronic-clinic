import axios from 'axios';
import { CONFIG_APP } from 'config/base';

export const axiosInstance = axios.create({
  baseURL: CONFIG_APP.BASE_URL
});
