import { axiosInstance } from 'api/config';

export const cardPatientApi = {
  async getCardPatient(cardId: string | number) {
    const result = await axiosInstance.get(`patients/patient-card/${cardId}`);
    return result.data;
  }
};
