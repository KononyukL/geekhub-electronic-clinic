import { getAuthData } from 'config/helpers';
import { axiosInstance } from 'api/config';
import { useNavigate } from 'react-router-dom';
import { AUTH_DATA } from 'config';
import ROUTES from 'routes/constants';
import { toast } from 'react-toastify';
import { useAppDispatch } from 'store/hooks';

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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
        dispatch({ type: 'logout/LOGOUT' });
        toast.error(error.message || 'Something went wrong', { toastId: '401' });
      }

      return Promise.reject(error);
    }
  );
};
