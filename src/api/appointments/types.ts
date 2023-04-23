export interface INewAppointment {
  doctor_id: string | undefined | number;
  date: string;
  time: string;
}

export interface IFinishAppointmentFormData {
  medical_history?: string;
  objective_status?: string;
  diagnosis?: string;
  examination?: string;
  recommendations?: string;
}

export interface IFinishAppointmentData {
  id: string | number;
  formData: IFinishAppointmentFormData;
}
