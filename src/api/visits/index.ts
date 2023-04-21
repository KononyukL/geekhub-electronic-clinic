import { axiosInstance } from 'api/config';
import { IDeleteVisit, IVisitFilter } from 'api/visits/types';

export const visitsApi = {
  async getFinishedVisits(filter: IVisitFilter) {
    const result = await axiosInstance.get(`finished`, {
      params: filter
    });
    return result.data;
  },
  async getPlannedVisits(filter: IVisitFilter) {
    const result = await axiosInstance.get(`active-appointments`, {
      params: filter
    });
    return result.data;
  },
  async deleteVisit({ date, time }: IDeleteVisit) {
    const result = await axiosInstance.delete(`cancel-appoitment/${date}/${time}`);
    return result.data;
  }
};
