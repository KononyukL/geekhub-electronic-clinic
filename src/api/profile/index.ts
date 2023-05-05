import { axiosInstance } from 'api/config';
import { IEditPasswordData, IEditProfileData, IGetProfileData } from 'api/profile/types';

export const profileApi = {
  async getProfile({ id }: IGetProfileData) {
    const result = await axiosInstance.get(`accounts/user-${id}/my-account`);
    return result.data;
  },
  async editPassword({ id, formData }: IEditPasswordData) {
    const result = await axiosInstance.put(`accounts/user-${id}/my-account/edit-password`, {
      ...formData,
      user_id: id
    });
    return result.data;
  },
  async editProfile({ id, formData }: IEditProfileData) {
    const result = await axiosInstance.patch(`accounts/user-${id}/my-account/edit`, formData);
    return result.data;
  }
};
