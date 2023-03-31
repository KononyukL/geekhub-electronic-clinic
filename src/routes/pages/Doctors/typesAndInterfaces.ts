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

export interface IBookingReception {
  bookingReception: IBocking
}

export interface IBocking {
  time: string,
  status: boolean
}

export interface IDoctorAndIndex {
  doctor: IDoctor;
  index: number;
}

export interface IDoctorDetails {
  doctor: IDoctor;
}

export interface INameAndRating {
  doctor: IDoctor
}