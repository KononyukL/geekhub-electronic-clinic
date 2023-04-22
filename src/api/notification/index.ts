import { axiosInstance } from '../config';
import { TStatusNotification } from '../../store/notification';

export const notificationApi = {
  async allNotification() {
    const result = await axiosInstance.get('notifications/all-notifications');
    return result.data;
  },

  async statusNotification({ id, title, text, is_read }: TStatusNotification) {
    const result = await axiosInstance.post(`notifications/toggle-status/${id}/`, {
      title,
      text,
      is_read
    });
    return result.data;
  }
};
