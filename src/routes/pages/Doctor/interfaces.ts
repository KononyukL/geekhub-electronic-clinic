export interface IDoctor {
  id: number;
  email: string;
  profile_image: string;
  last_name: string;
  first_name: string;
  patronim_name: string;
  specialization: string;
  price: number;
  category: string;
  experience: string;
  info: string;
  education: string[],
  courses: string[],
  procedures_performed: string[],
  rating: number;
}

export interface IDoctorProps {
  currentDoctor: IDoctor
}