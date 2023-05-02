import { axiosInstance } from '../config';
import { IDoctorsFilter } from 'store/doctors/interfaces';
interface IFeedback {
  id: string | undefined;
  review_text: string;
  review_rating: number;
  created_at: string;
}

export const doctorsApi = {
  async doctors({ specializationId: id, page }: IDoctorsFilter) {
    const result = await axiosInstance.get(`${id ? `filter-doctors/${id}` : 'doctors'}`, {
      params: {
        page
      }
    });

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

  async feedbacks({ doctorId, page }: { doctorId: string | number; page: string | number }) {
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
