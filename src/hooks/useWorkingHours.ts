import { axiosInstance } from '../api/config';
import { toast } from 'react-toastify';

export const useWorkingHours = () => {
  axiosInstance.interceptors.response.use(
    (res) => res,
    (error) => {
      const statusCode = error?.response?.status;

      if (statusCode === 400) {
        toast.error('На цей час у вас прийом в іншого лікаря. Будь ласка, оберіть іншу дату.');
      }
    }
  );
};