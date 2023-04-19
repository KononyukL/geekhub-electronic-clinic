import { getAuthData } from 'config/helpers';
import { axiosInstance } from 'api/config';
import { useNavigate } from 'react-router-dom';
import { AUTH_DATA } from 'config';
import ROUTES from 'routes/constants';

export const useAuth = () => {
  const navigate = useNavigate();

  axiosInstance.interceptors.request.use((config) => {
    const { token } = getAuthData();

    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }

    return config;
  });

  axiosInstance.interceptors.response.use(
    (res) => res,
    (error) => {
      const statusCode = error?.response?.status;

      if (statusCode === 401) {
        localStorage.removeItem(AUTH_DATA);
        navigate(ROUTES.HOME.PATH);
        console.error(error.message);
      }

      return Promise.reject(error);
    }
  );
};
