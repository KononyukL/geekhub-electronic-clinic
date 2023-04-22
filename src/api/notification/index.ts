import { axiosInstance } from '../config';

export const notificationApi = {
  async allNotification() {
    const result = await axiosInstance.get('notifications/all-notifications');
    return result.data;
  }
};
