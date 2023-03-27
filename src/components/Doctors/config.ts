export interface IDoctor {
  firsName: string;
  lastName: string;
  fullName: string;
  profession: string;
  photo: string;
  rating: string;
  category: string;
  seniority: string;
  price: string;
  information: string;
}

export interface SelectedDoctor {
  selectedDoctors: IDoctor[];
}