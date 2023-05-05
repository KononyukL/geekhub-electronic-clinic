import { axiosInstance } from 'api/config';
import { IPatientVisitFilter, IVisitFilter } from 'api/visits/types';

export const visitsApi = {
  async getFinishedVisits({ specializationId: id, page }: IVisitFilter) {
    const result = await axiosInstance.get(`finished${id ? `/filter/specialization-${id}` : ''}`, {
      params: {
        page
      }
    });

    return result.data;
  },
  async getPlannedVisits({ specializationId: id, page }: IVisitFilter) {
    const result = await axiosInstance.get(
      `active-appointments${id ? `/filter/specialization-${id}` : ''}`,
      {
        params: {
          page
        }
      }
    );

    return result.data;
  },
  async getPlannedVisit(id: string | number) {
    const result = await axiosInstance.get(`active-appointments/appointment-${id}`);

    return result.data;
  },

  async getPatientFinishedVisit({
    patientId,
    filter: { specializationId: id, page }
  }: IPatientVisitFilter) {
    const result = await axiosInstance.get(
      `patient-finished/${patientId}${id ? `/filter/specialization-${id}` : ''}`,
      {
        params: {
          page
        }
      }
    );

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
  },
  async getPDFLink(id: string | number) {
    const result = await axiosInstance.get(`finished/id-${id}/create-pdf`, {
      responseType: 'arraybuffer'
    });
    return result.data;
  }
};
