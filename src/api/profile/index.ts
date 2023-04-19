import { axiosInstance } from 'api/config';
import { IGetProfileData } from 'api/profile/types';

export const profileApi = {
  async getProfile({ id }: IGetProfileData) {
    const result = await axiosInstance.get(`accounts/user-${id}/my-account`);
    return result.data;
  }
};
