import { axiosInstance } from 'api/config';
import { IVisitFilter } from 'api/visits/types';

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
  async getPatientFinishedVisit(id: string | number) {
    const result = await axiosInstance.get(`patient-finished/${id}`);
    return result.data;
  },
  async deleteVisit(id: string | number) {
    const result = await axiosInstance.delete(`cancel-appoitment/${id}`);
    return result.data;
  },
  async confirmVisit(id: string | number) {
    const result = await axiosInstance.patch(`confirm-appointment/${id}`, {});
    return result.data;
  },
  async getUnconfirmedVisits(filter: IVisitFilter) {
    const result = await axiosInstance.get(`unconfirmed-appointments`, {
      params: filter
    });
    return result.data;
  }
};
