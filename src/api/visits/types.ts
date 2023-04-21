export interface IVisitFilter {
  page: string | number;
}

export interface IVisit {
  id: number;
  date: string;
  time: string;
  patient: string;
  doctor: string;
  specialization: string;
  status: string;
  medical_history: string;
  objective_status: string;
  diagnosis: string;
  examination: string;
  recommendations: string;
}

export interface IVisits {
  count: number;
  next: string | null;
  previous: string | null;
  results: IVisit[];
}

export interface IDeleteVisit {
  date: string;
  time: string;
}
