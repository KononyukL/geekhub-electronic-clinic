import { TDoctorsApiResponse, TFeedbacks, TSpecializations } from './types';
import { IDoctor } from 'routes/pages/Doctor/interfaces';

export interface ISpecialization {
  name: string;
  image: string;
  id: string | number;
}

export interface IFeedback {
  patient_lastname: string;
  patient_firstname: string;
  review_rating: string;
  review_text: string;
  created_at: string;
}

export interface IDoctorsState {
  doctors: TDoctorsApiResponse;
  doctor: IDoctor;
  specializations: TSpecializations;
  feedbacks: TFeedbacks;
  isLoading: boolean;
  error: Error | string;
}
