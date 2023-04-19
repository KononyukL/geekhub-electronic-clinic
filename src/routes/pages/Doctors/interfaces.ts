import { IDoctor } from "../Doctor/interfaces";

export interface IDoctorAndIndex {
  currentDoctor: IDoctor;
  index: number;
}

export interface ISelectedDoctor {
  selectedDoctors: IDoctor[];
  flagPagination: boolean;
}