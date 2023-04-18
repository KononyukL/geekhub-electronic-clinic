import axios from 'axios';
import { CONFIG_APP } from 'config';
import { getAuthData } from 'config/helpers';

const { token } = getAuthData();

export const axiosInstance = axios.create({
  baseURL: CONFIG_APP.BASE_URL,
  headers: {
    Authorization: token ? `Token ${token}` : ''
  }
});
