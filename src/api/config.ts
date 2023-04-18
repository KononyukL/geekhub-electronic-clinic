import axios from 'axios';
import { TOKEN, CONFIG_APP } from 'config';

const token = localStorage.getItem(TOKEN);

export const axiosInstance = axios.create({
  baseURL: CONFIG_APP.BASE_URL,
  headers: {
    Authorization: token ? `Token ${token}` : ''
  }
});
