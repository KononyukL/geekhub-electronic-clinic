import { IDoctor } from 'routes/pages/Doctor/interfaces';
import { IFeedback, ISpecialization } from './interfaces';

export type TDoctorsApiResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: IDoctor[];
};

export type TSpecializations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: ISpecialization[];
};

export type TFeedbacks = {
  count: number;
  next: string | null;
  previous: string | null;
  results: IFeedback[];
};
