import { axiosInstance } from '../config';
interface IFeedback {
  id: string | undefined;
  review_text: string;
  review_rating: number;
  created_at: string;
}

export const doctorsApi = {
  async doctors({ page }: any) {
    const result = await axiosInstance.get(`doctors?page=${page}`);
    return result.data;
  },

  async doctor({ doctorId }: { doctorId: string | number }) {
    const result = await axiosInstance.get(`doctors/doctor-${doctorId}`);
    return result.data;
  },

  async specializations() {
    const result = await axiosInstance.get('specializations');
    return result.data;
  },

  async feedbacks({ doctorId, page }: { doctorId: string | number; page: number }) {
    const result = await axiosInstance.get(`doctors/doctor-${doctorId}/reviews?page=${page}`);
    return result.data;
  },

  async createFeedback({ id, review_text, review_rating, created_at }: IFeedback) {
    const result = await axiosInstance.post(`finished/id-${id}/add-review`, {
      review_text,
      review_rating,
      created_at
    });
    return result.data;
  }
};
